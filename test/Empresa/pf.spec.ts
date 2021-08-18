import Pf from "../../src/atividade1/Pf";

const PF = {
  NOME: "Fulano",
  SALARIO: 4000,
  CPF: "534.111.666-65",
  BENEFICIOS: ["Plano de saúde", "Vale refeição", "Férias"],
};

const pf = new Pf(PF.NOME, PF.SALARIO, PF.CPF);

describe("Pf", () => {
  test("Existe uma intância pf", () => {
    expect(pf).toBeTruthy();
  });

  describe("Todos parâmetros foram setados corretamente", () => {
    test("Nome", () => {
      expect(pf.getNome()).toBe(PF.NOME);
    });
    test("Salario", () => {
      expect(<any>pf.getSalarioLiquido() + PF.SALARIO * 0.1).toBe(PF.SALARIO);
    });
    test("CPF", () => {
      expect(pf.getCpf()).toBe(PF.CPF);
    });
    test("Beneficios", () => {
      expect(pf.getBeneficios()).toStrictEqual(PF.BENEFICIOS);
    });
  });
});
