import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awsome'
})
export class AwsomePipe implements PipeTransform {

  transform(phrase: string) {
      return phrase ? 'Awesome ' + phrase : '';
  }

}

