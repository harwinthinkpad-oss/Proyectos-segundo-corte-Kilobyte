export default class MConvencion {
    acRecaudado = 0;
    acPagoCosplayers = 0;
    cntCosplayers = 0;
    procesarAsistente(asistente) {
        this.acRecaudado += asistente.pago;
        if (asistente.tipo === "Cosplayer") {
            this.acPagoCosplayers += asistente.pago;
            this.cntCosplayers++;
        }
    }
    totalRecaudado() {
        return this.acRecaudado;
    }
    promedioCosplayers() {
        if (this.cntCosplayers > 0) {
            return this.acPagoCosplayers / this.cntCosplayers;
        }
        return 0;
    }
}
//# sourceMappingURL=mConvencion.js.map