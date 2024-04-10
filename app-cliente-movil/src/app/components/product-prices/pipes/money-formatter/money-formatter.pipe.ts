import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormatter',
  standalone: true
})
export class MoneyFormatterPipe implements PipeTransform {

  transform(money: number): string {
    return money.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });
  }

}
