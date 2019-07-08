import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensageiro',
  templateUrl: './mensageiro.component.html',
  styleUrls: ['./mensageiro.component.scss']
})
export class MensageiroComponent {

  @Output() mensagem = new EventEmitter<string>();

  enviaMensagem(mensagem: string) {
    this.mensagem.emit(mensagem);
  }

}
