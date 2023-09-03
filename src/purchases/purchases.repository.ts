import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";
import { UpdatePurchaseDto } from "./dto/update-purchase.dto";

@Injectable()
export class PurchaseRepository {
    constructor( private prisma: PrismaService) {}

    async create (createPurchaseDto: CreatePurchaseDto){
        try {     

            return await this.prisma.purchases.create({
              data: {
                products: {
                  set: createPurchaseDto.products,
                },
              },
            });

          } catch (error) {
            throw error;
          }
    }

    async findall () {
        try {     

            return await this.prisma.purchases.findMany();

          } catch (error) {
            throw error;
          }
    }

    async findone (id: number) {
        try {     

            return await this.prisma.purchases.findUnique({
                where: {
                    id: id
                }
            });

          } catch (error) {
            throw error;
          }
    }

    async delete (id: number){
        try {     

            await this.prisma.purchases.delete({
                where: {
                    id: id
                }
            });

          } catch (error) {
            throw error;
          }
    }
 
    async update (id: number, updatePurchaseDto: UpdatePurchaseDto){
        try {     

            return await this.prisma.purchases.update({
                where: {
                    id: id
                },
                data: updatePurchaseDto
            });

          } catch (error) {
            throw error;
          }
    }


}