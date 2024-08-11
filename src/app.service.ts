import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private name = "moein";
  
  getName() : string {
    return this.name
  }

  setName(newName: string) : void {
    this.name = newName
  }
}
