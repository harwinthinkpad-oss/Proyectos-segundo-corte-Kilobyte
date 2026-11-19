import MAsistente from "./mAsistente.js";
export default class MVisitante extends MAsistente {
    _preventa = false;
    constructor({ nombre, cedula, preventa, }) {
        super({ nombre, cedula, tipo: "Visitante" });
        this.preventa = preventa;
    }
    get preventa() {
        return this._preventa;
    }
    set preventa(preventa) {
        this._preventa = preventa;
    }
    get pago() {
        return this.preventa ? 8 : 10;
    }
}
//# sourceMappingURL=mVisitante.js.map