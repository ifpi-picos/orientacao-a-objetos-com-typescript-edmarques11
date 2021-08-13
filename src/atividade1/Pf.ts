import Funcionario from "./Funcionario";

export default class Pf extends Funcionario {
  private _cpf: String;

  constructor(
    nome: String,
    salario: Number,
    beneficios: String[],
    cpf: string
  ) {
    super(nome, salario, beneficios);
    this._cpf = cpf;
  }

  getCpf(): String {
    return this._cpf;
  }

  getSalarioLiquido(): Number {
    return (
      <any>super.getSalarioLiquido() - <any>super.getSalarioLiquido() * 0.1
    );
  }
}
