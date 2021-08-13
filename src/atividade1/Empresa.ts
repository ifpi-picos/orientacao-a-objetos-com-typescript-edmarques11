import Funcionario from "./Funcionario";

export default class Empresa {
  private _nome: String;
  private _funcionarios: Funcionario[];

  constructor(nome: String, funcionarios: Funcionario[] = []) {
    this._nome = nome;
  }

  getNome(): String {
    return this._nome;
  }

  setNome(nome: String) {
    this._nome = nome;
  }

  getFuncionarios(): Funcionario[] {
    return this._funcionarios;
  }

  setFuncionario(funcionario: Funcionario) {
    this._funcionarios.push(funcionario);
  }
}
