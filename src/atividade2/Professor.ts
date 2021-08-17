export default class {
  private _nome: String;

  constructor(nome: String) {
    this._nome = nome;
  }

  getNome(): String {
    return this._nome;
  }
}
