import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/\b\w+/g, (txt: string) =>
      txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
  }

}
