import mSuscripcion from "./mSuscripcion.js";
export default class mPlanDuo extends mSuscripcion {
    calcularCobro() {
        return this.getTarifaBase() + 3;
    }
}
//# sourceMappingURL=mPlanDuo.js.map