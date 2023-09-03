import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './database/prisma.service';
import { PurchasesModule } from './purchases/purchases.module';
import { CartProductsModule } from './cart-products/cart-products.module';

@Module({
  imports: [ProductsModule, PurchasesModule, CartProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}