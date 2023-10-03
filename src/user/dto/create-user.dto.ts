import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"
import { EmailNotRegistered } from "../validations/email.validation"
import { Exclude } from "class-transformer"

export class CreateUserDto {
    id?: string

    @IsString()
    @MinLength(3, { message: 'El nombre debe tener 3 caracteres o más.' })
    name: string

    @IsEmail()
    @EmailNotRegistered({ message: 'email already registered' })
    email: string

    @IsString()
    @MinLength(8)
    password: string
}
