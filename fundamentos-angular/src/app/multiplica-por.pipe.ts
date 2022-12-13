import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number, mulplicador: number): unknown {
    return valor * mulplicador;
  }

}
