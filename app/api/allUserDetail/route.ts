import prisma from "@/lib/db";

export async function GET() {
  try {
    const completeUserDetails = await prisma.user.findMany({
      include: {
        interestedDomains: true,
      },
    });
    const res = Response.json(completeUserDetails);
    res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    return res;
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}
