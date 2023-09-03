import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PurchaseRepository } from './purchases.repository';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchaseRepository, PrismaService],
})
export class PurchasesModule {}
