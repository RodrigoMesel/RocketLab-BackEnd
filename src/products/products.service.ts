import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {

  constructor(private repository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {

    return this.repository.create(createProductDto);
  }

  findAll() {
    return this.repository.findall();
  }

  findOne(id: number) {
    return this.repository.findone(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto);
  }

  remove(id: number) {
    this.repository.remove(id);
  }
}
