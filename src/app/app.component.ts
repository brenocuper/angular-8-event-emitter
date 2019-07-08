import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public mensagemRecebida: string;

  recebeMensgem(mensagem: string) {
    this.mensagemRecebida = mensagem;
  }

}
