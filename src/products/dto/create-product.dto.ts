import { IsInt, IsNotEmpty, IsNumber, Length, Min } from "class-validator";


export class CreateProductDto {

    @IsNotEmpty({message: "nome não pode ser nulo"})
    @Length(2,100 ,{message: "o nome do produto tem que ter entre 2 e 100 caracteres"})
    name: string;

    @IsNotEmpty({message: "descrição não pode ser nula"})
    description: string;

    @IsNotEmpty({message: "link da imagem não pode ser nulo"})
    imageLink: string;

    @IsNotEmpty({message: "preço não pode ser nulo"})
    @IsNumber()
    @Min(0, {message: "preço tem que ser um valor positivo"})
    price: number;

}
