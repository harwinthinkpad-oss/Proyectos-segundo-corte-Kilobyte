export default class MDelivery {
    acRecaudadoMoto = 0;
    acRecaudadoBici = 0;
    acCostoEnvios = 0;
    cntEnvios = 0;
    procesarEnvioMoto(envio) {
        this.acCostoEnvios += envio.costoEnvio;
        this.cntEnvios++;
        this.acRecaudadoMoto += envio.costoEnvio;
    }
    procesarEnvioBici(envio) {
        this.acCostoEnvios += envio.costoEnvio;
        this.cntEnvios++;
        this.acRecaudadoBici += envio.costoEnvio;
    }
    totalMoto() {
        return this.acRecaudadoMoto;
    }
    totalBici() {
        return this.acRecaudadoBici;
    }
    promedioGeneral() {
        if (this.cntEnvios > 0)
            return this.acCostoEnvios / this.cntEnvios;
        return 0;
    }
}
//# sourceMappingURL=mDelivery.js.map