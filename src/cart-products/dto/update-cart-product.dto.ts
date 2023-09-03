import { PartialType } from '@nestjs/mapped-types';
import { CreateCartProductDto } from './create-cart-product.dto';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class UpdateCartProductDto extends PartialType(CreateCartProductDto) {

    @IsNotEmpty({message: "id não pode ser nulo"})
    @IsInt({message: "id tem que ser um numeral"})
    @Min(0, {message: "id tem que ser um valor positivo"})
    id: number;
}
