import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListagemComponent } from './listagem/listagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import {ListagemUsuarioTabelaComponent} from "./listagem-tabela/listagem-tabela";
import {MatTableModule} from "@angular/material/table";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
  declarations: [CadastroComponent, ListagemComponent,ListagemUsuarioTabelaComponent, PaginainicialComponent],
  exports: [CadastroComponent, ListagemComponent,ListagemUsuarioTabelaComponent, PaginainicialComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    PipesModule
  ],
})
export class ContaModule {}
