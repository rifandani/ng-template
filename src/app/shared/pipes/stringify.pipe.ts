import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify',
  pure: false, // make it so that when we change the state, it will adapt to state changes
})
export class StringifyPipe implements PipeTransform {
  transform(object: Object, ...args: unknown[]): string {
    return JSON.stringify(object, null, 2);
  }
}
