import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { ListagemComponent } from './conta/listagem/listagem.component';
import { PaginainicialComponent } from './conta/paginainicial/paginainicial.component';
import {ListagemUsuarioTabelaComponent} from "./conta/listagem-tabela/listagem-tabela";
import {TelaloginComponent} from "./conta/telalogin/telalogin.component";

const routes: Routes = [
  {
    path: 'cadastrarconta',
    component: CadastroComponent,
  },
  {
    path: 'editarconta/:id',
    component: CadastroComponent
  },
  {
    path: 'listarconta',
    component: ListagemComponent,
  },
  {
    path: 'listarconta-tabela',
    component: ListagemUsuarioTabelaComponent
  },
  {
    path: 'paginainicial',
    component: PaginainicialComponent,
  },
  {
    path: 'login',
    component: TelaloginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
