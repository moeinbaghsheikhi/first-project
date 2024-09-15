import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
import { CustomPipe } from 'src/pipes/custom/custom.pipe';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService){}

    @Get()
    index(): object{
        return this.userService.getAll()
    }
    
    @Get('/:id')
    get(@Param('id', ParseIntPipe, CustomPipe) id : number){
        return this.userService.getById(id)
    }

    // Pipe & PipeLine
    @Post()
    store(@Body(new MobilePipe(11)) createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        const updateUser = await this.userService.updateUser(parseInt(id), updateUserDto)

        return null
    }

    @Delete('/:id')
    destroy(@Param('id') id: string){
        return this.userService.deleteUser(parseInt(id))
    }
}
