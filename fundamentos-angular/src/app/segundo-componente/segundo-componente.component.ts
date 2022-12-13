import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = " Joalisson";
  dataNascimento = "1996-07-07";
  urlImage = "/assets/Cyberpunk.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento do ${this.nome}, é: ${this.dataNascimento}`);
  }
}
