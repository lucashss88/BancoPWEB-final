import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuarioService";
import {MensagemService} from "../../shared/services/mensagemService";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  conta = new Conta(undefined);
  titulo = 'CADASTRO DE CONTAS';
  operacaocadastro = true;
  constructor(private usuarioService: UsuarioService,private rotaAtual: ActivatedRoute,
              private roteador: Router, private mensagemService: MensagemService) {
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.titulo = 'EDIÇÃO DE CONTA';
      this.operacaocadastro = false;
      const idEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.usuarioService.pesquisarPorId(idEdicao).subscribe(
        contaEdicao => this.conta = contaEdicao
      );
    }
  }

  ngOnInit(): void {}

  inserirConta(): void {
    if(this.operacaocadastro) {
      this.usuarioService.inserir(this.conta).subscribe(
        {
          next: () => {
            this.mensagemService.success('Conta cadastrada com sucesso!');
            this.roteador.navigate(['listarconta']);
            console.log(this.conta)
          },
          error: err => {
            this.mensagemService.error('Conta inválida!');
          }
        }
      );
    }
    else {
      this.usuarioService.alterar(this.conta).subscribe(
        () => {
          this.mensagemService.success('Conta editada com sucesso!');
          this.roteador.navigate(['listarconta']);
        },
        err => {
          this.mensagemService.error('Conta com erro! ')
        }
      );
    }
    //this.contas.push(this.conta);
    //this.conta = new Conta();
  }
}
