import { PrismaClient, Prisma } from '@prisma/client'
import { STATUS_CODES } from 'http';

const prisma = new PrismaClient()

export async function GET() {
  try {
    const data = await prisma.user.findMany();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    let user = await req.json();
    user.tipe = "Pelanggan";
    delete user.confirmPassword
    console.log("user", user)
    const data = await prisma.user.findFirst({
      where:
        { email: user.email }
    });
    if (!data) {
      await prisma.user.create({ data: user });
      return Response.json({ message: "success" })
    } else {
      return Response.json({error: "Email is already taken"}, {status: 409})
    }
  } catch (error) {
    return Response.json({ error })
  }
}
