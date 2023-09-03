import { CreateProductDto } from './create-product.dto';
import { IsInt, IsNotEmpty, Length, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNotEmpty({message: "id não pode ser nulo"})
    @IsInt({message: "id tem que ser um numeral"})
    @Min(0, {message: "id tem que ser um valor positivo"})
    id: number;
}
