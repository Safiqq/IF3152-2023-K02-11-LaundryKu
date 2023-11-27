import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { idUser: number } }) {
  try {
    const { idUser } = params
    const data = await prisma.keranjang.findFirst({
      where:
        { idUser }
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function UPDATE(req: Request, { params }: { params: { idUser: number } }) {
  try {
    const { idUser } = params
    const payload = await req.json();
    const data = await prisma.keranjang.update({
      where:
        { idUser },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}
