import Disciplina from "../../src/atividade2/Disciplina";

const DISCIPLINA = {
  NOME: "Algoritmos",
  CH: 5000,
};

const disciplina = new Disciplina(DISCIPLINA.NOME, DISCIPLINA.CH);

describe("Disciplina", () => {
  test("Deve existir uma nova disciplina", () => {
    expect(disciplina).toBeTruthy();
    expect(disciplina.getNome()).toBe(DISCIPLINA.NOME);
    expect(disciplina.getCh()).toBe(DISCIPLINA.CH);
  });
});
