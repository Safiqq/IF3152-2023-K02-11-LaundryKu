import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET({ params }: { params: { token: string } }) {
  try {
    const { token } = params
    const data = await prisma.authentication.findFirst({
      where:
        { token }
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}
