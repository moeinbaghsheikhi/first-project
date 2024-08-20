import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

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

    @Post()
    store(@Body() data: object){
        return this.userService.createUser(data)
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() data: any){
        return this.userService.updateUser(parseInt(id), data)
    }

    @Delete('/:id')
    destroy(@Param('id') id: string){
        return this.userService.deleteUser(parseInt(id))
    }
}
