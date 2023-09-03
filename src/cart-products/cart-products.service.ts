import { Injectable } from '@nestjs/common';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';
import { CartProductsRepository } from './cart-products.repository';

@Injectable()
export class CartProductsService {
  constructor(private repository: CartProductsRepository){}

  create(createCartProductDto: CreateCartProductDto) {
    return this.repository.create(createCartProductDto);
  }

  findAll() {
    return this.repository.findall();
  }

  findOne(id: number) {
    return this.repository.findone(id);
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return this.repository.update(id, updateCartProductDto);
  }

  remove(id: number) {
    this.repository.remove(id);
  }

  removeAll(){
    return this.repository.removeAll();
  }
}
