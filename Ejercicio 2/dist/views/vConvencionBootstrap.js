export default class VConvencionBootstrap {
    btNuevo;
    filas;
    lblTotal;
    lblPromedio;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoAsistente");
        this.filas = document.getElementById("body_asistentes");
        this.lblTotal = document.getElementById("body_lblTotal");
        this.lblPromedio = document.getElementById("body_lblPromedio");
    }
    onNuevoAsistente(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ asistente, totalRecaudado, promedioCosplayers, }) {
        if (asistente !== null) {
            const fila = document.createElement("tr");
            for (const valor of [
                asistente.nombre,
                String(asistente.cedula),
                asistente.tipo,
                `$${this.formatearMonto(asistente.monto)}`,
            ]) {
                const celda = document.createElement("td");
                celda.textContent = valor;
                fila.append(celda);
            }
            this.filas.append(fila);
        }
        this.lblTotal.textContent = `$${this.formatearMonto(totalRecaudado)}`;
        this.lblPromedio.textContent = `$${this.formatearMonto(promedioCosplayers)}`;
    }
    formatearMonto(monto) {
        return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
    }
}
//# sourceMappingURL=vConvencionBootstrap.js.map