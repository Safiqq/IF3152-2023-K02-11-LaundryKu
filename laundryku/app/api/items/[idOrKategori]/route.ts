import prisma from "@/app/api/_base";
import { KategoriItem } from '@prisma/client';

export async function GET(req: Request, { params }: { params: { idOrKategori: string } }) {
  try {
    const { idOrKategori } = params;
    let data;
    if (Number.isNaN(parseInt(idOrKategori))) {
      data = await prisma.item.findMany({
        where:
          { kategori: idOrKategori as KategoriItem },
        orderBy: {
          id: 'asc'
        }
      });
    } else {
      data = await prisma.item.findFirst({
        where:
          { id: parseInt(idOrKategori) }
      });
    }
    if (!data) {
      return Response.json({ message: 'Item not found' }, { status: 404 });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT(req: Request, { params }: { params: { idOrKategori: string } }) {
  try {
    const { idOrKategori } = params
    let payload = await req.json();
    const data = await prisma.item.update({
      where:
        { id: parseInt(idOrKategori) },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error });
  }
}

export async function DELETE(req: Request, { params }: { params: { idOrKategori: string } }) {
  try {
    const { idOrKategori } = params
    const data = await prisma.item.delete({
      where:
        { id: parseInt(idOrKategori) }
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error });
  }
}