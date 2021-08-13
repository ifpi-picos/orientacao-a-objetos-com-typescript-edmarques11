import Funcionario from "./Funcionario";

export default class Pj extends Funcionario {
  private _cpnj: String;

  constructor(
    nome: String,
    salario: Number,
    beneficios: String[],
    cnpj: string
  ) {
    super(nome, salario, beneficios);
    this._cpnj = cnpj;
  }

  getCnpj(): String {
    return this._cpnj;
  }

  getSalarioLiquido(): Number {
    return (
      <any>super.getSalarioLiquido() - <any>super.getSalarioLiquido() * 0.05
    );
  }
}
