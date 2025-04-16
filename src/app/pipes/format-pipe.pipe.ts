import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPipe'
})
export class FormatPipe implements PipeTransform {

  transform(value: unknown): unknown {
    
    if (typeof value !== 'string') {
      return value;
    }

    let formattedValue = value.replace(/_/g, ' ').toLowerCase();
    formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);

    return formattedValue;
  }

}
