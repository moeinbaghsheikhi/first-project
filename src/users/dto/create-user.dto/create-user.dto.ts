import { IsInt, IsString, Min, Max, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsInt()
    @Min(1)
    @Max(100)
    id: number; // number & >=1 <100

    @IsString()
    @MinLength(3)
    @MaxLength(15)
    username: string; // string & >3 <15
} 