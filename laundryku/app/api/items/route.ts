import prisma from "@/app/api/_base";

export async function GET() {
  try {
    const data = await prisma.item.findMany({
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
    const payload = await req.json();
    await prisma.item.create({data: payload});
    return Response.json({message: "success"})
  } catch (error) {
    console.log(error)
    return Response.json({error})
  }
}
