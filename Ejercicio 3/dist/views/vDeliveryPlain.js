export default class VDeliveryPlain {
    btNuevo;
    reporte;
    detalleEnvios = "";
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoEnvio");
        this.reporte = document.getElementById("body_reporte");
    }
    onNuevoEnvio(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ envio, totalMoto, totalBici, promedioGeneral, }) {
        if (envio !== null) {
            this.detalleEnvios += `Guía ${envio.numeroGuia}: $${this.formatearMonto(envio.costo)}\n`;
        }
        let texto = this.detalleEnvios;
        if (this.detalleEnvios !== "")
            texto += "\n";
        texto += `Total recaudado en envíos Moto: $${this.formatearMonto(totalMoto)}\n`;
        texto += `Total recaudado en envíos Bici: $${this.formatearMonto(totalBici)}\n`;
        texto += `Promedio general de costo de envío: $${this.formatearMonto(promedioGeneral)}`;
        this.reporte.textContent = texto;
    }
    formatearMonto(monto) {
        return monto.toFixed(2);
    }
}
//# sourceMappingURL=vDeliveryPlain.js.map