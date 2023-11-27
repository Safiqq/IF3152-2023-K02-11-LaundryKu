import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { kategori: string } }) {
  try {
    const { kategori } = params
    const data = await prisma.item.findMany({
      where:
        { kategori }
    });

    if (!data) {
      return Response.json({ message: 'Item not found' }, { status: 404 });
    }
    return Response.json({ data });
  } catch (error) {
    console.log('error', error)
    return Response.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}
