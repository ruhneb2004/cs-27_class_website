import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.event.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export async function DELETE(req) {
  const reqBody = await req.json();
  try {
    const data = await prisma.event.delete({
      where: {
        id: reqBody.id,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting user data:", error);
  }
}

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const data = await prisma.event.create({
      data: {
        name: reqBody.name,
        description: reqBody.description,
        startDate: reqBody.startDate,
        endDate: reqBody.endDate,
        location: reqBody.location,
        eventUrl: reqBody.eventUrl,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating user data:", error);
  }
}
