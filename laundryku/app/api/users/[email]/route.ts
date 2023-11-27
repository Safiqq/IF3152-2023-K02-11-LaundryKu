import prisma from "@/app/api/_base";

export async function GET(req: Request, { params }: { params: { email: string } }) {
  try {
    const { email } = params
    const data = await prisma.user.findFirst({
      where:
        { email }
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error)
    return Response.json({ error });
  }
}

export async function PUT(req: Request, { params }: { params: { email: string } }) {
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
  }
}

export async function DELETE(req: Request, { params }: { params: { email: string } }) {
  try {
    const { email } = params
    const data = await prisma.user.delete({
      where:
        { email },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}