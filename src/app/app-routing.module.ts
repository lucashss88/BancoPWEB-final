import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { ListagemComponent } from './conta/listagem/listagem.component';
import { PaginainicialComponent } from './conta/paginainicial/paginainicial.component';

const routes: Routes = [
  {
    path: 'cadastrarconta',
    component: CadastroComponent,
  },
  {
    path: 'listarconta',
    component: ListagemComponent,
  },
  {
    path: 'paginainicial',
    component: PaginainicialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
