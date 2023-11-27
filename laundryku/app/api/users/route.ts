import prisma from "@/app/api/_base";

export async function GET() {
  try {
    const data = await prisma.user.findMany({
      orderBy: {
        id: 'asc'
      }
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function POST(req: Request) {
  try {
    let user = await req.json();
    user.tipe = "Pelanggan";
    delete user.confirmPassword
    const data = await prisma.user.findFirst({
      where:
        { email: user.email }
    });
    if (!data) {
      await prisma.user.create({ data: user });
      return Response.json({ message: "success" })
    } else {
      return Response.json({error: "Email is already taken"}, {status: 409})
    }
  } catch (error) {
    return Response.json({ error })
  }
}
