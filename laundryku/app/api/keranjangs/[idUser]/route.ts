import prisma from "@/app/api/_base";

export async function GET(req: Request, { params }: { params: { idUser: string } }) {
  try {
    const { idUser } = params
    console.log(idUser)
    const data = await prisma.keranjang.findFirst({
      where:
        { id_user: parseInt(idUser) }
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error });
  }
}

export async function PUT(req: Request, { params }: { params: { idUser: string } }) {
  try {
    const { idUser } = params
    let payload = await req.json();
    const data = await prisma.keranjang.update({
      where:
        { id_user: parseInt(idUser) },
      data: payload,
    });
    console.log('datadiapi', data)
    return Response.json({ data });
  } catch (error) {
    console.log("error", error)
    return Response.json({ error });
  }
}
