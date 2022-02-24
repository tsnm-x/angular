import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCount'
})
export class ChangeCountPipe implements PipeTransform {

  transform(value: string, condition: number): any {
    if(condition){
      return value = `Count: ${condition}`
    } else{
      return value = 'Not available...'
    }
  }

}
