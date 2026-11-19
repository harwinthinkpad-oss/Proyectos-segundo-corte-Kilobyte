export default class MEnvio {
    _numeroGuia = "";
    _montoPedido = 0;
    constructor({ numeroGuia, montoPedido, }) {
        this.numeroGuia = numeroGuia;
        this.montoPedido = montoPedido;
    }
    get numeroGuia() {
        return this._numeroGuia;
    }
    set numeroGuia(numeroGuia) {
        this._numeroGuia = numeroGuia;
    }
    get montoPedido() {
        return this._montoPedido;
    }
    set montoPedido(montoPedido) {
        this._montoPedido = montoPedido;
    }
    get costoEnvio() {
        return 2;
    }
}
//# sourceMappingURL=mEnvio.js.map