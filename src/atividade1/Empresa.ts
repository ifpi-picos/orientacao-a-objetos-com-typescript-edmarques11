import Funcionario from "./Funcionario";

export default class Empresa {
  private _nome: String;
  private _funcionarios: Funcionario[];

  constructor(nome: String, funcionarios: Funcionario[] = []) {
    this._nome = nome;
    this._funcionarios = funcionarios;
  }

  getNome(): String {
    return this._nome;
  }

  getFuncionarios(): Funcionario[] {
    return this._funcionarios;
  }

  setFuncionario(funcionario: Funcionario) {
    this._funcionarios.push(funcionario);
  }
}
