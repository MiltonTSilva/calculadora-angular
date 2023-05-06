import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora';

  valor: string = '';
  operador: string = '';
  valor1: string = '';
  valor2: string = '';
  total: number = 0;

  numero(value: number) {
    if (
      this.operador == '+' ||
      this.operador == '-' ||
      this.operador == 'X' ||
      this.operador == '/'
    ) {
      this.valor2 += value;

      console.log('Valor:' + this.valor);
      console.log('Valor 2:' + this.valor2);
    } else {
      this.valor1 += value;

      console.log('Valor 1:' + this.valor1);
    }

    this.valor = this.valor1 + this.operador + this.valor2;
  }

  operacao(value: string) {
    this.operador = value;
    this.valor = this.valor1 + this.operador;
    console.log(value);
  }

  resultado(value: string) {
    if (value == '=') {
      let soma: number = 0;
      if (this.operador == '+') {
        this.valor = this.valor1 + '+' + this.valor2;
        soma = parseFloat(this.valor1) + parseFloat(this.valor2);
      } else if (this.operador == '-') {
        this.valor = this.valor1 + '-' + this.valor2;
        soma = parseFloat(this.valor1) - parseFloat(this.valor2);
      } else if (this.operador == 'X') {
        this.valor = this.valor1 + 'X' + this.valor2;
        soma = parseFloat(this.valor1) * parseFloat(this.valor2);
      } else if (this.operador == '/') {
        this.valor = this.valor1 + '/' + this.valor2;
        soma = parseFloat(this.valor1) / parseFloat(this.valor2);
      }

      this.total = soma;
      this.valor1 = this.total.toString();
      this.valor2 = '';

      console.log('Resultdo:' + this.total.toString());
    }
  }

  limpar(value: string) {
    this.valor = '';
    this.operador = '';
    this.valor1 = '';
    this.valor2 = '';
    this.total = 0;
    console.clear();
  }
}
