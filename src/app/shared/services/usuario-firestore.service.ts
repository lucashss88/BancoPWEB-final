import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Conta} from '../model/conta';
import {map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Conta>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Conta[]> {
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }

  inserir(conta: Conta): Observable<object> {
    delete conta.idconta;
    return from(this.colecaoUsuarios.add(Object.assign({}, conta)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoUsuarios.doc(id).delete());
  }

  /*pesquisarPorId(id: string): Observable<Conta> {
    return this.colecaoUsuarios.doc(id).get().pipe(map(document => new Conta(document.idconta, document.data())));
  }
*/
  atualizar(usuario: Conta): Observable<void> {
    delete usuario.idconta;
    return from(this.colecaoUsuarios.doc(usuario.idconta).update(Object.assign({}, usuario)));
  }

}
