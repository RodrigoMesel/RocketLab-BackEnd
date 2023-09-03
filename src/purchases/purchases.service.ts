import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseRepository } from './purchases.repository';

@Injectable()
export class PurchasesService {

  constructor(private repository: PurchaseRepository){}

  create(createPurchaseDto: CreatePurchaseDto) {
    return this.repository.create(createPurchaseDto);
  }

  findAll() {
    return this.repository.findall();
  }

  findOne(id: number) {
    return this.repository.findone(id);
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.repository.update(id, updatePurchaseDto);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
