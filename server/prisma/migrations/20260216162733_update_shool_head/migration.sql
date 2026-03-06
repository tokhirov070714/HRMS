/*
  Warnings:

  - The values [DEPARTMENT_HEAD] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Department_Head` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PayrollRecord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `schoolId` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'EMPLOYEE', 'SCHOOL_HEAD');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "public"."UserRole_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE';
COMMIT;

-- DropForeignKey
ALTER TABLE "Department_Head" DROP CONSTRAINT "Department_Head_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Department_Head" DROP CONSTRAINT "Department_Head_userId_fkey";

-- DropForeignKey
ALTER TABLE "PayrollRecord" DROP CONSTRAINT "PayrollRecord_userId_fkey";

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Department_Head";

-- DropTable
DROP TABLE "PayrollRecord";

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "schoolName" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School_Head" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_Head_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_Head_userId_key" ON "School_Head"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "School_Head_schoolId_key" ON "School_Head"("schoolId");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School_Head" ADD CONSTRAINT "School_Head_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School_Head" ADD CONSTRAINT "School_Head_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
