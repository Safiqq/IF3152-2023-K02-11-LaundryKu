import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// export async function GET(req: Request, { params }: { params: { idOrKategori: string | number } }) {
//   try {
//     const { idOrKategori } = params

// let data;

// if (typeof(idOrKategori) === typeof("string")) {
//   console.log(idOrKategori, "string")
// } else {
//   console.log(idOrKategori, "int")
// }
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
