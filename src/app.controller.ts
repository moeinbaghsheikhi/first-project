import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return "Hello test!"
  }

  @Get('getname')
  getName(): string {
    return this.appService.getName()
  }

  @Post('setname')
  setName(): string {
    const msg : string = "set name successfuly!"
    let new_name : string = "ali"

    // set a new name
    this.appService.setName(new_name)

    // get name
    return this.appService.getName()
  }
}