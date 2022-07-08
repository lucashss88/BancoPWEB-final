export class Conta {

  id?: number;
  nome?: string;
  cpf?: string;
  saldo?: number;


  constructor(idconta?: number, conta: Conta = {}) {
    this.id = idconta;
    this.cpf = conta.cpf;
    this.nome = conta.nome;
    this.saldo = 0;
  }
}

