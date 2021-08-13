import Empresa from "./Empresa";
import Pf from "./Pf";
import Pj from "./Pj";

const empresa = new Empresa("Ambev", [
  new Pf("PF", 4000, ["Plano de saúde"], "322.383.974-77"),
  new Pj("PJ", 8000, ["Plano de saúde"], "17.184.654/0001-15"),
]);
