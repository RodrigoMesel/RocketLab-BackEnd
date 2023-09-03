import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { Prisma } from '@prisma/client';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
    id: number;
    products: Prisma.JsonValue[]
}
