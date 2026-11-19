import MEnvio from "./mEnvio.js";
export default class MBici extends MEnvio {
    _bolsaTermica = false;
    _horaPico = false;
    constructor({ numeroGuia, montoPedido, bolsaTermica, horaPico, }) {
        super({ numeroGuia, montoPedido });
        this.bolsaTermica = bolsaTermica;
        this.horaPico = horaPico;
    }
    get bolsaTermica() {
        return this._bolsaTermica;
    }
    set bolsaTermica(bolsaTermica) {
        this._bolsaTermica = bolsaTermica;
    }
    get horaPico() {
        return this._horaPico;
    }
    set horaPico(horaPico) {
        this._horaPico = horaPico;
    }
    get costoEnvio() {
        let costo = super.costoEnvio;
        if (this.bolsaTermica)
            costo += 1;
        if (this.horaPico)
            costo += 1.25;
        return costo;
    }
}
//# sourceMappingURL=mBici.js.map