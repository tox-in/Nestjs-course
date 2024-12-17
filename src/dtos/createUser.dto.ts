import { IsNotEmpty, IsEmail, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Username can\'t be empty' })
    username: string;

    @MinLength(8, { message: 'Password must be at least 8 characters long.'})
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d] {8,}$/, {
        message: 'Password must contain both letters and numbers'
    })
    password: string;
}