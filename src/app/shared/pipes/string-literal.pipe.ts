import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLiteral',
})
export class StringLiteralPipe implements PipeTransform {
  transform(
    value: number | string,
    before?: number | string,
    after?: number | string
  ): string {
    return `${before || ''} ${value} ${after || ''}`;
  }
}
