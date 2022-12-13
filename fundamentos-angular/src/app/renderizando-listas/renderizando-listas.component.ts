import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Xiaomi", descricao: "XingLingTop bem em conta", esgotado: false},
    {id: 2, nome: "Samsung", esgotado: false},
    {id: 3, nome: "Nokia", descricao: "Quebra ate parede", esgotado: false},
    {id: 4, nome: "LG", descricao: "Esse esquenta dms", esgotado: true}
  ]
}
