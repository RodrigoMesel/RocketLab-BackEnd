import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository, PrismaService],
})
export class ProductsModule {}
