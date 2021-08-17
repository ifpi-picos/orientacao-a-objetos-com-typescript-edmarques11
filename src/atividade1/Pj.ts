import Funcionario from "./Funcionario";

export default class Pj extends Funcionario {
  private _cpnj: String;

  constructor(nome: String, salario: Number, cnpj: string) {
    super(nome, salario, ["Plano de saúde"]);
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
