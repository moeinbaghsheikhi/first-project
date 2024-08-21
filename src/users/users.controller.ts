import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService){}

    @Get()
    index(): object{
        return this.userService.getAll()
    }
    
    @Get('/:id')
    get(@Param('id') id : string){
        return this.userService.getById(parseInt(id))
    }

    // Pipe & PipeLine
    @Post()
    store(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.updateUser(parseInt(id), updateUserDto)
    }

    @Delete('/:id')
    destroy(@Param('id') id: string){
        return this.userService.deleteUser(parseInt(id))
    }
}
