import { IsInt, IsNotEmpty, Min } from "class-validator";

export class CreateCartProductDto {

    @IsNotEmpty({message: "productId não pode ser nulo"})
    @IsInt({message: "productId tem que ser um numeral"})
    @Min(0, {message: "productId tem que ser um valor positivo"})
    productId: number;

    @IsNotEmpty({message: "quantity não pode ser nulo"})
    @IsInt({message: "quantity tem que ser um numeral"})
    @Min(0, {message: "quantity tem que ser um valor positivo"})
    quantity: number;
}
