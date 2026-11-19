import MDelivery from "../models/mDelivery.js";
export default class CDelivery {
    modelo = new MDelivery();
    vista;
    controladorEnvio;
    constructor(vista, controladorEnvio) {
        this.vista = vista;
        this.controladorEnvio = controladorEnvio;
        this.vista.onNuevoEnvio(() => this.procesarEnvio());
        this.reportar(null);
    }
    procesarEnvio() {
        this.controladorEnvio.solicitarEnvio((envio) => this.procesarEnvioMoto(envio), (envio) => this.procesarEnvioBici(envio));
    }
    procesarEnvioMoto(envio) {
        this.modelo.procesarEnvioMoto(envio);
        this.reportar({
            numeroGuia: envio.numeroGuia,
            tipo: "Moto",
            costo: envio.costoEnvio,
        });
    }
    procesarEnvioBici(envio) {
        this.modelo.procesarEnvioBici(envio);
        this.reportar({
            numeroGuia: envio.numeroGuia,
            tipo: "Bici",
            costo: envio.costoEnvio,
        });
    }
    reportar(envio) {
        this.vista.reportar({
            envio,
            totalMoto: this.modelo.totalMoto(),
            totalBici: this.modelo.totalBici(),
            promedioGeneral: this.modelo.promedioGeneral(),
        });
    }
}
//# sourceMappingURL=cDelivery.js.map