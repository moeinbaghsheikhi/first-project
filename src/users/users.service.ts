import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';

@Injectable()
export class UsersService {
    private users : any[] = [
        {
            id: 1,
            username: "moein"
        },
        {
            id: 2,
            username: "amir"
        },
        {
            id: 3,
            username: "ali"
        },
    ]

    getAll(): object {
        return {
            data: this.users,
            statusCode: 200,
            message: "Get all users!"
        }
    }

    getById(id : number): object {
        let findUser = null

        for(const user of this.users){
            if(user.id == id) 
                findUser = user
        }

        return {
            data: findUser,
            statusCode: 200,
            message: "Get user!"
        }
    }

    createUser(createUserDto: CreateUserDto): object{
        if(createUserDto){
            this.users.push(createUserDto)
        }

        return {
            data: this.users,
            statusCode: 200,
            message: "created User! send users list"
        }
    }

    updateUser(id: number, updateUserDto: UpdateUserDto){
        let findUser = null

        for(const user of this.users){
            if(user.id == id) 
                findUser = user
        }

        if(findUser){
            findUser.username = updateUserDto.username
            
            return {
                data: findUser,
                statusCode: 200,
                message: "user Update!"
            }
        } 
        else return {
            data: null,
            statusCode: 400,
            message: "id is not define!"
        }
    }

    deleteUser(id : number): object {
        let newUsers: object[] = []

        for(const user of this.users){
            if(user.id != id) newUsers.push(user)
        }

        return {
            data: newUsers,
            statusCode: 200,
            message: "Get user!"
        }
    }

}
