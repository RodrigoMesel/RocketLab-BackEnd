import { PrismaService } from "src/database/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductRepository {
    constructor( private prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto){

        try {     

            return await this.prisma.products.create({
    
                data: createProductDto
    
            })

          } catch (error) {
            throw error;
          }

    }

    async findall() {
        try {     

            return await this.prisma.products.findMany()

        } catch (error) {
          throw error;
        }
    } 

    async findone(id: number){
        try {     

            return await this.prisma.products.findUnique({
                where: {
                    id: id
                }
            });

        } catch (error) {
          throw error;
        }
    }

    async update(id: number, updateProductDto: UpdateProductDto){
        try {     

            return await this.prisma.products.update({
                where: {
                    id: id
                },
                
                data: updateProductDto
            })

        } catch (error) {
          throw error;
        }
    }

    async remove(id: number){
        try {     

            await this.prisma.products.delete({
                where: {
                    id: id,
                }
            })

        } catch (error) {
          throw error;
        }
    }


}