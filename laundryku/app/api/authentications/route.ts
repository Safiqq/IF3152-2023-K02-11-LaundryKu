import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    await prisma.authentication.create({data: payload});
    return Response.json({message: "success"})
  } catch (error) {
    return Response.json({error})
  }
}

