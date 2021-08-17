import Funcionario from "./Funcionario";

export default class Pf extends Funcionario {
  private _cpf: String;

  constructor(nome: String, salario: Number, cpf: string) {
    super(nome, salario, ["Plano de saúde", "Vale refeição", "Férias"]);
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
