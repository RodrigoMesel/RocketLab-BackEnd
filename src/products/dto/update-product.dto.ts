import { CreateProductDto } from './create-product.dto';
import { IsInt, IsNotEmpty, Length, Min } from 'class-validator';

export class UpdateProductDto {

    @IsNotEmpty({message: "id não pode ser nulo"})
    @IsInt({message: "id tem que ser um numeral"})
    @Min(0, {message: "id tem que ser um valor positivo"})
    id: number;

    @IsNotEmpty({message: "nome não pode ser nulo"})
    @Length(2,100 ,{message: "o nome do produto tem que ter entre 2 e 100 caracteres"})
    name: string;

    @IsNotEmpty({message: "descrição não pode ser nula"})
    description: string;

    @IsNotEmpty({message: "link da imagem não pode ser nulo"})
    imageLink: string;

    @IsNotEmpty({message: "preço não pode ser nulo"})
    @IsInt({message: "preço tem que ser um numeral"})
    @Min(0, {message: "preço tem que ser um valor positivo"})
    price: number;
}
