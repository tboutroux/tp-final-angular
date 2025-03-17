import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if (typeof value !== 'string') {
      return value;
    }

    let formattedValue = value.replace(/_/g, ' ').toLowerCase();
    formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);

    return formattedValue;
  }

}
