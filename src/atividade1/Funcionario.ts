export default class Funcionario {
  private _nome: String;
  private _salario: Number;
  private _beneficios: String[];

  constructor(nome: String, salario: Number, beneficios: String[]) {
    this._nome = nome;
    this._salario = salario;
    this._beneficios = beneficios;
  }

  getSalarioLiquido(): Number {
    return this._salario;
  }
  getBeneficios(): String[] {
    return this._beneficios;
  }
  getNome(): String {
    return this._nome;
  }
}
