import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateCartProductDto } from "./dto/create-cart-product.dto";
import { UpdateCartProductDto } from "./dto/update-cart-product.dto";


@Injectable()
export class CartProductsRepository {
    constructor( private prisma: PrismaService) {}

   async create(cartProduct: CreateCartProductDto) {
        try {     

            return await this.prisma.cartProducts.create({
                data: cartProduct
            })

        } catch (error) {
        throw error;
        }
   }

   async findall(){
        try {     

            return await this.prisma.cartProducts.findMany()

        } catch (error) {
        throw error;
        }
   }
    

   async findone(id: number){
        try {     

            return await this.prisma.cartProducts.findUnique({
                where: {
                    id: id
                }
            })

        } catch (error) {
        throw error;
        }
   }

   async update(id: number, updateCartProductDto: UpdateCartProductDto){
        try {     

            return await this.prisma.cartProducts.update({
                where: {
                    id: id
                },
                data: updateCartProductDto
            })

        } catch (error) {
        throw error;
        }
   }

   async remove(id: number){
        try {     

            await this.prisma.cartProducts.delete({
                where: {
                    id: id
                }
            })

        } catch (error) {
        throw error;
        }
   }

   async removeAll(){
        try {     

            return await this.prisma.cartProducts.deleteMany()

        } catch (error) {
        throw error;
        }
   }

   async removeByProductId(productId: number) {
        try {     

            await this.prisma.cartProducts.deleteMany({
                where: {
                    productId: productId
                }
            })

        } catch (error) {
        throw error;
        }
   }

}