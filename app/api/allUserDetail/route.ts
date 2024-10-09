import prisma from "@/lib/db";

export async function GET(req) {
  try {
    const completeUserDetails = await prisma.user.findMany({
      include: {
        interestedDomains: true,
      },
    });
    return Response.json(completeUserDetails);
  } catch {
    console.error;
  }
}
