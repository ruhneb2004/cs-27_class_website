import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const redBody = await req.json();
  try {
    const interestedDomain = await prisma.interestedDomain.findFirst({
      where: {
        id: redBody.id,
      },
    });
    if (interestedDomain) {
      await prisma.interestedDomain.delete({
        where: {
          id: redBody.id,
        },
      });
      return NextResponse.json({ message: "Deleted Successfully" });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json("Error fetching user details", { status: 500 });
  }
}
