import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UsuarioService} from '../../shared/services/usuarioService';
import {ActivatedRoute} from '@angular/router';
import {Conta} from "../../shared/model/conta";
import {MensagemService} from "../../shared/services/mensagemService";

@Component({
  selector: 'app-listagem-tabela',
  templateUrl: './listagem-tabela.html',
  styleUrls: ['./listagem-tabela.css']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  mostrarColunas = ['nome', 'cpf', 'acoes'];
  public dadosTabela: MatTableDataSource<Conta>;

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private mensagemService: MensagemService) {
    this.dadosTabela = new MatTableDataSource<Conta>();
  }

  ngOnInit(): void {
    this.carregarDados();
  }


  carregarDados(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.dadosTabela = new MatTableDataSource<Conta>(usuarios);
        this.rotaAtual.queryParams.subscribe(params =>
        {
          this.filtrar(params['filtro']);
        });

      }
    );
  }

  filtrar(texto: string): void {
    this.dadosTabela.filter = texto.trim().toLowerCase();
  }

  removerUsuario(usuario: Conta, indice: number) {
    this.usuarioService.remover(usuario.idconta || -1).subscribe(
      {
        next: removido => {
          this.mensagemService.success('Usuário removido!')
          this.dadosTabela.data.splice(indice, 1);
          this.dadosTabela = new MatTableDataSource<Conta>(this.dadosTabela.data);

        },
        error: err => {
          this.mensagemService.error('Erro na remoção!')
        }
      }
    );
  }
}
