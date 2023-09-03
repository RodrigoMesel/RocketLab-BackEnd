import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { IsInt, IsNotEmpty, Min } from 'class-validator';


export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
    @IsNotEmpty({message: "id não pode ser nulo"})
    @IsInt({message: "id tem que ser um numeral"})
    @Min(0, {message: "id tem que ser um valor positivo"})
    id: number;
}
