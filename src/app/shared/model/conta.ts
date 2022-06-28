export class Conta {

  idconta?: number;
  nome?: string;
  cpf?: string;
  saldo?: number;


  constructor(idconta?: number, conta: Conta = {}) {
    this.idconta = idconta;
    this.cpf = conta.cpf;
    this.nome = conta.nome;
    this.saldo = 0;
  }
}

