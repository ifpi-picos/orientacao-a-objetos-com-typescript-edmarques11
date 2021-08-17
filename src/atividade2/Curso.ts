import Disciplina from "./Disciplina";

export default class Curso {
  private _nome: String;
  private _disciplinas: Disciplina[];

  constructor(nome: String, disciplinas: Disciplina[] = []) {
    this._nome = nome;
    this._disciplinas = disciplinas;
  }

  getNome(): String {
    return this._nome;
  }

  getDisciplinas(): Disciplina[] {
    return this._disciplinas;
  }

  addDisciplina(disciplina: Disciplina) {
    this._disciplinas.push(disciplina);
  }

  deleteDisciplina(nome: String, ch: Number): String {
    const disciplinaIndex = this._disciplinas.findIndex(
      (disc) => <any>disc.getNome() === nome && <any>disc.getCh() === ch
    );
    if (disciplinaIndex >= 0) this._disciplinas.splice(disciplinaIndex, 1);
    else return "Disciplina não encotrada!";
  }
}
