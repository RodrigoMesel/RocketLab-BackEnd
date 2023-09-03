import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { CartProductsRepository } from 'src/cart-products/cart-products.repository';

@Injectable()
export class ProductsService {

  constructor(private productRepository: ProductRepository, private cartRepository: CartProductsRepository) {}

  async create(createProductDto: CreateProductDto) {

    return this.productRepository.create(createProductDto);
  }

  findAll() {
    return this.productRepository.findall();
  }

  findOne(id: number) {
    return this.productRepository.findone(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    this.cartRepository.removeByProductId(id) // Para garantir que os elementos do carrinho sejam atualizados em tempo real à medida que os produtos são adicionados ou removidos.
    this.productRepository.remove(id);
  }
}
