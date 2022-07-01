import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:8080/usuarios';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Conta[]> {
    // GET /usuarios/
    return this.clienteHttp.get<Conta[]>(this.URL_USUARIOS);
  }


  inserir(usuario: Conta): Observable<Conta> {
    return this.clienteHttp.post<Conta>(this.URL_USUARIOS, usuario);
  }

  remover(idconta: number): Observable<object> {
    // DELETE /usuarios/id
    return this.clienteHttp.delete(`${this.URL_USUARIOS}/${idconta}`);
  }

  alterar(usuarioNovosValores: Conta): Observable<Conta> {
    // PUT /usuarios/id
    return this.clienteHttp.put<Conta>(`${this.URL_USUARIOS}/${usuarioNovosValores.idconta}`, usuarioNovosValores);
  }

  pesquisarPorId(id: number): Observable<Conta> {
    // GET /usuarios/id
    return this.clienteHttp.get<Conta>(`${this.URL_USUARIOS}/${id}`);
  }
}
