import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  console.log("reqBody ", reqBody);
  try {
    const userDetail = await prisma.user.findFirst({
      where: { id: reqBody.id },
      include: {
        currentTinkering: true,
        interestedDomains: true,
      },
    });

    console.log("something ", userDetail?.id);
    return Response.json(userDetail);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json("Error fetching user details", { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userData = await req.json();
    console.log(userData);
    const user = await prisma.user.findFirst({
      where: { id: userData.id },
    });
    if (user) {
      const res = await prisma.user.update({
        where: { id: userData.id },
        data: {
          name: userData.name,
          imageUrl: userData.imageUrl,
          description: userData.description,
          interestedDomains: {
            deleteMany: {},
            create: (userData.interestedDomain || []).map(
              (domain: { id: string; name: string; userId: string }) => ({
                name: domain.name,
              })
            ),
          },
        },
      });
      console.log(res);
      console.log("User updated successfully");
      return NextResponse.json(res);
    } else {
      const createUser = await prisma.user.create({
        data: {
          id: userData.id,
          name: userData.name,
          imageUrl: userData.imageUrl,
          description: userData.description,
          interestedDomains: {
            create: (userData.interestedDomain || []).map(
              (domain: { id: string; name: string; userId: string }) => ({
                name: domain.name,
              })
            ),
          },
        },
      });
      console.log("User created successfully");

      return NextResponse.json(createUser);
    }
  } catch (err) {
    console.log(err);
  }
}
