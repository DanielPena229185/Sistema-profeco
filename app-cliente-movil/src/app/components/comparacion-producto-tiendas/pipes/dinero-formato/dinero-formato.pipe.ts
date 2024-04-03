import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dineroFormato',
  standalone: true,
})
export class DineroFormatoPipe implements PipeTransform {
  transform(dinero: number): string {
    return dinero.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });
  }
}
