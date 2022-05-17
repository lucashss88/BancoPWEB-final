export class Conta {
  idconta?: string;
  nome?: string;
  cpf?: string;
  saldo?: number;


  constructor(idconta?: string, conta: Conta = {}) {
    this.idconta = idconta;
    this.cpf = conta.cpf;
    this.nome = conta.nome;
    this.saldo = conta.saldo;
  }
}

