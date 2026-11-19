export default class VConvencionPlain {
    btNuevo;
    reporte;
    detalleAsistentes = "";
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoAsistente");
        this.reporte = document.getElementById("body_reporte");
    }
    onNuevoAsistente(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ asistente, totalRecaudado, promedioCosplayers, }) {
        if (asistente !== null) {
            this.detalleAsistentes += `${asistente.nombre} (${asistente.cedula}) paga: $${this.formatearMonto(asistente.monto)}\n`;
        }
        let texto = this.detalleAsistentes;
        if (this.detalleAsistentes !== "")
            texto += "\n";
        texto += `Total recaudado en taquilla: $${this.formatearMonto(totalRecaudado)}\n`;
        texto += `Promedio pagado por Cosplayers: $${this.formatearMonto(promedioCosplayers)}`;
        this.reporte.textContent = texto;
    }
    formatearMonto(monto) {
        return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
    }
}
//# sourceMappingURL=vConvencionPlain.js.map