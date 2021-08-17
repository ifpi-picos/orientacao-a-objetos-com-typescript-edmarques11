import Empresa from "../../src/atividade1/Empresa";
import Pf from "../../src/atividade1/Pf";
import Pj from "../../src/atividade1/Pj";

const FUNCIONARIOS = {
  PF: {
    NOME: "Fulano",
    SALARIO: 4000,
    CPF: "534.111.666-65",
  },
  PJ: {
    NOME: "Fulano",
    SALARIO: 6000,
    CNPJ: "69.214.535/0001-61",
  },
};

const EMPRESA = {
  NOME: "Intec",
  FUNCIONARIOS: [
    new Pf(FUNCIONARIOS.PF.NOME, FUNCIONARIOS.PF.SALARIO, FUNCIONARIOS.PF.CPF),
    new Pj(FUNCIONARIOS.PJ.NOME, FUNCIONARIOS.PJ.SALARIO, FUNCIONARIOS.PJ.CNPJ),
  ],
};

const empresa = new Empresa(EMPRESA.NOME, EMPRESA.FUNCIONARIOS);

describe("Empresa", () => {
  test("Deve existir uma instância de Empresa", () => {
    expect(empresa).toBeTruthy();
  });

  describe("Empresa deve possuir os mesmos parâmetros passados na construção", () => {
    test("Nome", () => {
      expect(empresa.getNome()).toBe(EMPRESA.NOME);
    });
    test("Funcionarios", () => {
      expect(empresa.getFuncionarios()).toBe(EMPRESA.FUNCIONARIOS);
    });
  });

  test("Deve ser possível adicionar um novo funcionario", () => {
    const funcionario = new Pf("Outro", 5000, "745.922.747-17");
    empresa.setFuncionario(funcionario);

    expect(empresa.getFuncionarios().includes(funcionario)).toBeTruthy();
  });
});
