export default class VDeliveryBootstrap {
    btNuevo;
    filas;
    lblMoto;
    lblBici;
    lblPromedio;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoEnvio");
        this.filas = document.getElementById("body_envios");
        this.lblMoto = document.getElementById("body_lblMoto");
        this.lblBici = document.getElementById("body_lblBici");
        this.lblPromedio = document.getElementById("body_lblPromedio");
    }
    onNuevoEnvio(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ envio, totalMoto, totalBici, promedioGeneral, }) {
        if (envio !== null) {
            const fila = document.createElement("tr");
            const guia = document.createElement("td");
            guia.textContent = envio.numeroGuia;
            const tipo = document.createElement("td");
            tipo.textContent = envio.tipo;
            const costo = document.createElement("td");
            costo.textContent = `$${this.formatearMonto(envio.costo)}`;
            fila.append(guia, tipo, costo);
            this.filas.append(fila);
        }
        this.lblMoto.textContent = `$${this.formatearMonto(totalMoto)}`;
        this.lblBici.textContent = `$${this.formatearMonto(totalBici)}`;
        this.lblPromedio.textContent = `$${this.formatearMonto(promedioGeneral)}`;
    }
    formatearMonto(monto) {
        return monto.toFixed(2);
    }
}
//# sourceMappingURL=vDeliveryBootstrap.js.map