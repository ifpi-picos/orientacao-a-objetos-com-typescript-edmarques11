import Disciplina from "../../src/atividade2/Disciplina";
import Professor from "../../src/atividade2/Professor";

const DISCIPLINA = {
  NOME: "Algoritmos",
  CH: 5000,
};

const PROFESSOR = {
  NOME: "Alguém",
};

const disciplina = new Disciplina(DISCIPLINA.NOME, DISCIPLINA.CH);
const professor = new Professor(PROFESSOR.NOME);

describe("Disciplina", () => {
  test("Deve existir uma nova disciplina", () => {
    expect(disciplina).toBeTruthy();
    expect(disciplina.getNome()).toBe(DISCIPLINA.NOME);
    expect(disciplina.getCh()).toBe(DISCIPLINA.CH);
    disciplina.setProfessor(professor);
    expect(disciplina.getProfessor()).toBe(professor);
    expect(disciplina.getProfessor().getNome()).toBe(PROFESSOR.NOME);
  });
});
