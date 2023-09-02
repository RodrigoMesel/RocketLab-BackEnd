import { PrismaService } from "src/database/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductRepository {
    constructor( private prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto){

        return await this.prisma.products.create({

            data:{
                name: createProductDto.name,
                description: createProductDto.description,
                price: createProductDto.price,
                imageLink: createProductDto.imageLink
            }

        })
    }

    async findall() {
        return await this.prisma.products.findMany()
    } 

    async findone(id: number){
        return await this.prisma.products.findUnique({
            where: {
                id: id
            }
        });
    }

    async update(id: number, updateProductDto: UpdateProductDto){
        return await this.prisma.products.update({
            where: {
                id: id
            },
            data: {
                id: updateProductDto.id,
                name: updateProductDto.name,
                description: updateProductDto.description,
                price: updateProductDto.price,
                imageLink: updateProductDto.imageLink
            }
        })
    }

    async remove(id: number){
        await this.prisma.products.delete({
            where: {
                id: id,
            }
        })
    }


}