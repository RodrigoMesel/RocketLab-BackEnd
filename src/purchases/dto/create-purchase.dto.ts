import { Prisma } from "@prisma/client";

export class CreatePurchaseDto {
    products: Prisma.JsonValue[];
}
