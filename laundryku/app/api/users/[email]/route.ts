import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { email: string } }) {
  try {
    const { email } = params
    const data = await prisma.user.findFirst({
      where:
        { email }
    });
    console.log(data)
    console.log(1)
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function UPDATE(req: Request, { params }: { params: { email: string } }) {
  try {
    const { email } = params
    const payload = await req.json();
    const data = await prisma.user.update({
      where:
        { email },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE({ params }: { params: { email: string } }) {
  try {
    const { email } = params
    const data = await prisma.user.delete({
      where:
        { email },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}