import Curso from "../../src/atividade2/Curso";
import Disciplina from "../../src/atividade2/Disciplina";

const DISCIPLINA = {
  NOME: "Algoritmos",
  CH: 5000,
};

const CURSO = {
  NOME: "Engenharia Computacional",
  DISCIPLINAS: [new Disciplina(DISCIPLINA.NOME, DISCIPLINA.CH)],
};

const curso = new Curso(CURSO.NOME, CURSO.DISCIPLINAS);

describe("Curso", () => {
  test("Deve criar um novo curso", () => {
    expect(curso).toBeTruthy();
    expect(curso.getNome()).toEqual(CURSO.NOME);
    expect(curso.getDisciplinas()[0].getNome()).toBe(DISCIPLINA.NOME);
    expect(curso.getDisciplinas()[0].getCh()).toBe(DISCIPLINA.CH);
  });

  test("Deve adicionar uma disciplina", () => {
    const oo = new Disciplina("Orientação a objetos", 78);
    curso.addDisciplina(oo);

    expect(curso.getDisciplinas().includes(oo)).toBeTruthy();
  });

  test("Deve remover uma disciplina", () => {
    const disciplinaIndex = curso
      .getDisciplinas()
      .findIndex(
        (disc) =>
          <any>disc.getNome() === "Orientação a objetos" &&
          <any>disc.getCh() === 78
      );
    const disciplina = curso.getDisciplinas()[disciplinaIndex];
    curso.deleteDisciplina("Orientação a objetos", 78);

    expect(curso.getDisciplinas().includes(disciplina)).toBe(false);
  });
});
