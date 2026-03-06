/*
  Warnings:

  - The values [FACULTY,PART_TIME_WORKER] on the enum `EmployeeType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phonePrimary` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AcademicPosition" AS ENUM ('LECTURER', 'ASSISTANT_PROFESSOR', 'ASSOCIATE_PROFESSOR', 'PROFESSOR');

-- CreateEnum
CREATE TYPE "AdministrativePosition" AS ENUM ('TECHNICIAN', 'CLEANER', 'RECRUITER', 'RECEPTIONIST');

-- AlterEnum
BEGIN;
CREATE TYPE "EmployeeType_new" AS ENUM ('ACADEMIC', 'ADMINISTRATIVE_STAFF');
ALTER TABLE "User" ALTER COLUMN "employeeType" TYPE "EmployeeType_new" USING ("employeeType"::text::"EmployeeType_new");
ALTER TYPE "EmployeeType" RENAME TO "EmployeeType_old";
ALTER TYPE "EmployeeType_new" RENAME TO "EmployeeType";
DROP TYPE "public"."EmployeeType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_positionId_fkey";

-- DropIndex
DROP INDEX "User_positionId_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "phonePrimary",
DROP COLUMN "positionId",
ADD COLUMN     "academicPosition" "AcademicPosition",
ADD COLUMN     "addressForeign" VARCHAR(200),
ADD COLUMN     "addressLocal" VARCHAR(200),
ADD COLUMN     "administrativePosition" "AdministrativePosition",
ADD COLUMN     "cityForeign" VARCHAR(100),
ADD COLUMN     "countryForeign" VARCHAR(100),
ADD COLUMN     "phoneForeign" VARCHAR(20),
ADD COLUMN     "phoneLocal" VARCHAR(20);

-- DropTable
DROP TABLE "Position";
