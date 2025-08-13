/*
  Warnings:

  - A unique constraint covering the columns `[aadharCard]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadharCard` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Vote" AS ENUM ('voter', 'admin');

-- DropIndex
DROP INDEX "public"."User_email_key";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "aadharCard" TEXT NOT NULL,
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "isVoted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "role" "public"."Vote" NOT NULL DEFAULT 'voter',
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."Candidates" (
    "name" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "vote" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidates_party_key" ON "public"."Candidates"("party");

-- CreateIndex
CREATE UNIQUE INDEX "User_aadharCard_key" ON "public"."User"("aadharCard");
