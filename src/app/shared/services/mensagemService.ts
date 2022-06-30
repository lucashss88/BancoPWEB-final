import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) { }

  error(mensagem: string): void {
    this.abrirSnackBar(mensagem,['error']);
  }

  success(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success'])
  }

  info(mensagem: string): void {
    this.abrirSnackBar(mensagem,['info']);
  }

  private abrirSnackBar(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.politeness = 'assertive';
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }

}
