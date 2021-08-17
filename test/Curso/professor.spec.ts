import Professor from "../../src/atividade2/Professor";

const professor = new Professor("Fulano");
describe("Professor", () => {
  test("Existe uma instância de professor", () => {
    expect(professor).toBeTruthy()
  });
});
