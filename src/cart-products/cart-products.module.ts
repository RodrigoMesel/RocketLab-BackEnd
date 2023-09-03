import { Module } from '@nestjs/common';
import { CartProductsService } from './cart-products.service';
import { CartProductsController } from './cart-products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CartProductsRepository } from './cart-products.repository';

@Module({
  controllers: [CartProductsController],
  providers: [CartProductsService, CartProductsRepository, PrismaService],
})
export class CartProductsModule {}
