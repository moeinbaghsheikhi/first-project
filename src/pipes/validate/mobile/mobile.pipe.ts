import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  constructor(private readonly mobileLength: number){}
  
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile : string = value.mobile

    if(mobile){
      // validation
      if(mobile.length != this.mobileLength) throw new BadRequestException(`شماره موبایل حتما باید ${this.mobileLength} رقم باشه`)

      // addone data
      if(mobile.startsWith("0912")) value.operator = "همراه اول"
      else if(mobile.startsWith("0936")) value.operator = "ایرانسل"
      else if(mobile.startsWith("0922")) value.operator = "رایتل"
    }

    return value;
  }
}
