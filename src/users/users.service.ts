import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    getAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    getById(id : number): Promise<User> {
       return this.userRepository.findOneBy({ id })
    }

    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser)
    }

    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<object>{
        return this.userRepository.update(id, updateUserDto)
    }

    deleteUser(id : number): Promise<object> {
        return this.userRepository.delete(id)
    }

}
