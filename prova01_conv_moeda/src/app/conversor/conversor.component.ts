import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

   // propriedades para armazenar o valor e a unidade de entrada
 inputValue: number = 0;
 inputUnit: string = 'dolar';

 // propriedades para armazenar o valor e a unidade de saída
 outputValue: number = 0;
 cotacaoValue: number = 0;
 outputUnit: string = 'dolar';


 // função para realizar as conversões de medida
 convertValue() {

       this.outputValue = this.inputValue * this.cotacaoValue;

 }




}
