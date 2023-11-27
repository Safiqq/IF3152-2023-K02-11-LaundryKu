import prisma from "@/app/api/_base";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const data = await prisma.pesanan.findFirst({
      where:
        { id: parseInt(id) },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const payload = await req.json();
    const data = await prisma.pesanan.update({
      where:
        { id: parseInt(id) },
      data: payload,
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    const data = await prisma.pesanan.delete({
      where:
        { id: parseInt(id) },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}