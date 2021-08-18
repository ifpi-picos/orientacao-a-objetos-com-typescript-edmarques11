import Pj from "../../src/atividade1/Pj";

const PJ = {
  NOME: "Fulano",
  SALARIO: 6000,
  CNPJ: "69.214.535/0001-61",
  BENEFICIOS: ["Plano de saúde"],
};

const pj = new Pj(PJ.NOME, PJ.SALARIO, PJ.CNPJ);

describe("Pj", () => {
  test("Existe uma intância pj", () => {
    expect(pj).toBeTruthy();
  });

  describe("Todos parâmetros foram setados corretamente", () => {
    test("Nome", () => {
      expect(pj.getNome()).toBe(PJ.NOME);
    });
    test("Salario", () => {
      expect(<any>pj.getSalarioLiquido() + PJ.SALARIO * 0.05).toBe(PJ.SALARIO);
    });
    test("CNPJ", () => {
      expect(pj.getCnpj()).toBe(PJ.CNPJ);
    });
    test("Beneficios", () => {
      expect(pj.getBeneficios()).toStrictEqual(PJ.BENEFICIOS);
    });
  });
});
