import { Component, OnInit } from '@angular/core';
import {Conta} from "../../shared/model/conta";
import {UsuarioService} from "../../shared/services/usuarioService";
import {ActivatedRoute, Router} from "@angular/router";
import {MensagemService} from "../../shared/services/mensagemService";

@Component({
  selector: 'app-creditar',
  templateUrl: './creditar.component.html',
  styleUrls: ['./creditar.component.css']
})
export class CreditarComponent implements OnInit {

  contas: Conta[];
  titulo = 'CADASTRO DE CONTAS';
  constructor(private usuarioService: UsuarioService,private rotaAtual: ActivatedRoute,
              private roteador: Router, private mensagemService: MensagemService) {
    this.contas = new Array<Conta>();
  }

  ngOnInit(): void {
  }

//   creditar(valor: number, conta: Conta): void {
//     this.usuarioService.pesquisarPorId(valor).subscribe(
//       {
//         next: removido => {
//           const indxUsuario = this.contas.findIndex(u => u.idconta === conta.idconta);
//
//           if (indxUsuario > -1) {
//             conta.saldo += valor;
//           }
//         },
//         error: err => {
//           this.mensagemService.error('Erro na remoção!');
//         }
//       }
//     );
// }
}
