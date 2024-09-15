import { IsInt, IsString, Min, Max, MinLength, MaxLength, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    name: string; // string & >3 <15

    @IsNotEmpty()
    mobile: string;
} 