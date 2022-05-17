import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import { contas } from '../../shared/model/contas';
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {ActivatedRoute, Router} from "@angular/router";
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  conta: Conta;
  titulo = 'CADASTRO DE CONTAS';
  constructor(private contaService: UsuarioFirestoreService,private rotaAtual: ActivatedRoute,
              private roteador: Router,) {
    this.conta = new Conta();

  }

  ngOnInit(): void {}

  inserirConta(): void {
      this.contaService.inserir(this.conta).subscribe(
        () => {
          this.roteador.navigate(['listarusuarios']);
          console.log(this.conta)
        }
      );
    //this.contas.push(this.conta);
    //this.conta = new Conta();
  }
}
