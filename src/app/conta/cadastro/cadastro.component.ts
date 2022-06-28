import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuarioService";
//import { FormsModule } from '@angular/forms';
import {MensagemService} from "../../shared/services/mensagemService";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  conta: Conta;
  titulo = 'CADASTRO DE CONTAS';
  constructor(private usuarioService: UsuarioService,private rotaAtual: ActivatedRoute,
              private roteador: Router, private mensagemService: MensagemService) {
    this.conta = new Conta();

  }

  ngOnInit(): void {}

  inserirConta(): void {
      this.usuarioService.inserir(this.conta).subscribe(
        () => {
          this.mensagemService.info('Usuário cadastrado com sucesso!');
          this.roteador.navigate(['listarconta']);
          console.log(this.conta)
        }
      );
    //this.contas.push(this.conta);
    //this.conta = new Conta();
  }
}
