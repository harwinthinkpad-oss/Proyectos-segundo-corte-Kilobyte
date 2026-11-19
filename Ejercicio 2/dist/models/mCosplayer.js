import MAsistente from "./mAsistente.js";
export default class MCosplayer extends MAsistente {
    _grupal = false;
    constructor({ nombre, cedula, grupal, }) {
        super({ nombre, cedula, tipo: "Cosplayer" });
        this.grupal = grupal;
    }
    get grupal() {
        return this._grupal;
    }
    set grupal(grupal) {
        this._grupal = grupal;
    }
    get pago() {
        return this.grupal ? 4.5 : 6;
    }
}
//# sourceMappingURL=mCosplayer.js.map