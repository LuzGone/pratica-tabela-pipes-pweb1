import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor:string): string {
    let novoValor = '';
    switch (valor.length){
      case 8:
        novoValor = valor.slice(0,4) + "-" + valor.slice(4);
        return novoValor;
      case 10:
        novoValor = '('+valor.slice(0,2) + ")" + valor.slice(2,6) + "-" + valor.slice(6);
        return novoValor;
      case 11:
        novoValor = '('+valor.slice(0,3) + ")" + valor.slice(3,7) + "-" + valor.slice(7);
        return novoValor;
      default:
        return valor
    }
  }
}
