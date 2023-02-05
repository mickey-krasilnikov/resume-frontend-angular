import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: number | string | undefined, country: string): any {
    try {
      return parsePhoneNumber(phoneValue + '', country as CountryCode).formatNational();
    } catch (error) {
      return phoneValue;
    }
  }
}
