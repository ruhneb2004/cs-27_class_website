-- DropForeignKey
ALTER TABLE "CurrentTinkering" DROP CONSTRAINT "CurrentTinkering_userId_fkey";

-- DropForeignKey
ALTER TABLE "InterestedDomain" DROP CONSTRAINT "InterestedDomain_userId_fkey";

-- AlterTable
ALTER TABLE "CurrentTinkering" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "InterestedDomain" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CurrentTinkering" ADD CONSTRAINT "CurrentTinkering_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterestedDomain" ADD CONSTRAINT "InterestedDomain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
