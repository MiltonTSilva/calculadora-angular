import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora';
  placeholder = '0';

  valor: string = '';
  operador: string = '';
  pontuacao: string = '';
  valor1: string = '';
  valor2: string = '';
  total: string = '';

  numero(value: number) {
    if (
      this.operador == '+' ||
      this.operador == '-' ||
      this.operador == 'X' ||
      this.operador == '/'
    ) {
      this.valor2 += value;
      if (this.valor.includes(this.operador)) {
        this.valor = this.valor + this.valor2;
      } else {
        this.valor = this.valor1 + this.operador + this.valor2;
      }
    } else {
      this.valor1 += value;
      console.log(value);

      this.valor = this.valor1 + this.operador;
    }
    //console.log(this.valor1);
  }

  operacao(value: string) {
    this.operador = value;
    if (this.valor2 == '') {
      this.valor = this.valor1 + this.operador;
    }
  }
  setPontuacao(value: string) {
    this.pontuacao = value;
    if (this.valor2 == '') {
      this.valor1 += this.pontuacao;
    } else {
      this.valor2 += this.pontuacao;
    }

    this.valor = this.valor1 + this.operador + this.valor2;
  }

  resultado(value: string) {
    if (value == '=') {
      let soma: number = 0;

      this.valor1 = this.formatarValor(this.valor1).toString();
      this.valor2 = this.formatarValor(this.valor2).toString();

      if (this.operador == '+') {
        soma = parseFloat(this.valor1) + parseFloat(this.valor2);
      } else if (this.operador == '-') {
        soma = parseFloat(this.valor1) - parseFloat(this.valor2);
      } else if (this.operador == 'X') {
        soma = parseFloat(this.valor1) * parseFloat(this.valor2);
      } else if (this.operador == '/') {
        soma = parseFloat(this.valor1) / parseFloat(this.valor2);
      }

      this.total = this.formataDinheiro(soma.toFixed(2).toString());

      this.valor1 = this.total.toString();
      this.valor2 = '';
    }
  }

  formatarValor(value: string) {
    value = value.replace('.', '');
    value = value.replace(',', '.');
    return parseFloat(value);
  }
  formataDinheiro(n: string) {
    return (
      //'R$ ' +
      n.replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
    );
  }

  limpar(value: string) {
    if (value == 'C') {
      this.valor = '';
      this.pontuacao = '';
      this.operador = '';
      this.valor1 = '';
      this.valor2 = '';
      this.total = '';
    } else if (value == 'CE') {
      this.valor2 = '';
      console.log(this.valor);
      this.valor = this.valor1.substring(0, this.valor.length - 2);
      this.valor = this.valor + this.operador;
      this.valor1 = this.valor;
      //console.log(this.valor1);
    } else if (value == 'DEL') {
      this.valor = this.valor1.substring(0, this.valor1.length - 1);
      this.valor1 = this.valor;
      //console.log(this.valor1);
    }
  }
}
