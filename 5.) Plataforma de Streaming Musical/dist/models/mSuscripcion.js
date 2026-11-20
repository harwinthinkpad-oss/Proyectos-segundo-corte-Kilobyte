export default class mSuscripcion {
    correo;
    tarifaBase = 6;
    constructor(correo) {
        this.correo = correo;
    }
    getCorreo() {
        return this.correo;
    }
    getTarifaBase() {
        return this.tarifaBase;
    }
    calcularCobro() {
        return this.getTarifaBase();
    }
}
//# sourceMappingURL=mSuscripcion.js.map