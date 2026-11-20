import mSuscripcion from "./mSuscripcion.js";

export default class mPlanDuo extends mSuscripcion {
  calcularCobro(): number {
    return this.getTarifaBase() + 3;
  }
}
