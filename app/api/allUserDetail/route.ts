import prisma from "@/lib/db";

export async function GET() {
  try {
    const completeUserDetails = await prisma.user.findMany({
      include: {
        interestedDomains: true,
      },
    });
    return Response.json(completeUserDetails);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}
