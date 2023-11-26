import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const data = await prisma.keranjang.findMany();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    await prisma.keranjang.create({data: payload});
    return Response.json({message: "success"})
  } catch (error) {
    return Response.json({error})
  }
}
