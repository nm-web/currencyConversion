import {Pipe, PipeTransform} from '@angular/core';
import {ICurrency} from '../model/types';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICurrency[], searchValue: string): any {
    if (!searchValue) {
      return value;
    }
    return value.filter((el) =>
      el.CharCode.toLowerCase().includes(searchValue.toLowerCase()) || el.Name.toLowerCase().includes(searchValue.toLowerCase() ));

  }

}
