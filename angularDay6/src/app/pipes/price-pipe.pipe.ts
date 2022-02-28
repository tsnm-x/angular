import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toString() + ' EGP';
  }

}
