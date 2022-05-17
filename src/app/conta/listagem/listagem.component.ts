import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import { UsuarioFirestoreService } from '../../shared/services/usuario-firestore.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  contas: Conta[];
  constructor(private contaFirestoreService: UsuarioFirestoreService, private roteador: Router) {
    this.contas = new Array<Conta>();
  }

  ngOnInit() {
    this.contaFirestoreService.listar().subscribe((contas) => (this.contas = contas));
  }

  editar(conta: Conta): void {
    this.roteador.navigate(['cadastrarconta', conta.idconta]);
  }

  remover(conta: Conta) {
    this.contaFirestoreService.remover(conta.idconta || '').subscribe(
      removido => {
        const indxUsuario = this.contas.findIndex(u => u.idconta === conta.idconta);

        if (indxUsuario > -1) {
          this.contas.splice(indxUsuario, 1);
        }
      }
    );
  }
}
