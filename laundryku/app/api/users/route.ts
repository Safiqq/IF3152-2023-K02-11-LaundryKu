import { PrismaClient, Prisma } from '@prisma/client'

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
    let user: Prisma.UserCreateInput = await req.json();
    user.tipe = "Pelanggan";
    console.log(user)
    // const data = await req.json();
    // delete data.confirmPassword;
    // console.log("tesestestes")
    // console.log({...data, tipe: "Pelanggan"})
    const a = await prisma.user.create({data: user});
    console.log(a)
    console.log("aaaaaaaaaaa")
    return Response.json({message: "success"})
  } catch (error) {
    return Response.json({error})
  }
}
