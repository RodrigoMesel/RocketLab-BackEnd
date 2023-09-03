import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CartProductsRepository } from 'src/cart-products/cart-products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository, CartProductsRepository, PrismaService],
})
export class ProductsModule {}
