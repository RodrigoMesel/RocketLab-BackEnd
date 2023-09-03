/*
  Warnings:

  - You are about to drop the column `productId` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Purchases` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_productId_fkey";

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "productId",
DROP COLUMN "quantity",
ADD COLUMN     "products" JSONB[];
