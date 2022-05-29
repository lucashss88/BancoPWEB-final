import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import {Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuarioService";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  contas: Conta[];
  constructor(private usuarioService: UsuarioService, private roteador: Router) {
    this.contas = new Array<Conta>();
  }

  ngOnInit() {
    this.usuarioService.listar().subscribe((contas) => (this.contas = contas));
  }

  editar(conta: Conta): void {
    this.roteador.navigate(['cadastrarconta', conta.idconta]);
  }

  remover(conta: Conta) {
    this.usuarioService.remover(conta.idconta || 0).subscribe(
      removido => {
        const indxUsuario = this.contas.findIndex(u => u.idconta === conta.idconta);

        if (indxUsuario > -1) {
          this.contas.splice(indxUsuario, 1);
        }
      }
    );
  }
}
