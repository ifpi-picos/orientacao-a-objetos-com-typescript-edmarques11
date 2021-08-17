import Professor from "./Professor";

export default class Disciplina {
  private _nome: String;
  private _ch: Number;
  private _professor: Professor;

  constructor(nome: String, ch: Number) {
    this._nome = nome;
    this._ch = ch;
  }

  getNome(): String {
    return this._nome;
  }

  getCh(): Number {
    return this._ch;
  }

  getProfessor(): Professor {
    return this._professor;
  }

  setProfessor(professor: Professor) {
    this._professor = professor;
  }
}
