import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET({ params }: { params: { id: number } }) {
  try {
    const { id } = params
    const data = await prisma.user.findFirst({
      where:
        { id }
    });

    if (!data) {
      return Response.json({ message: 'User not found' }, { status: 404 });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function UPDATE(req: Request, { params }: { params: { id: number } }) {
  try {
    const { id } = params
    const payload = await req.json();
    const data = await prisma.user.update({
      where:
        { id },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE({ params }: { params: { id: number } }) {
  try {
    const { id } = params
    const data = await prisma.user.delete({
      where:
        { id },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}