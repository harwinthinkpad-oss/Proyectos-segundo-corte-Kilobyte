export default class vPlataformaPlain {
    btNuevaSuscripcion;
    tablaCobros;
    lblIngresoTotal;
    lblEstudiantesVigentes;
    lblMayorPlaylistsEstudiante;
    constructor() {
        this.btNuevaSuscripcion = document.getElementById("plataforma_btNuevaSuscripcion");
        this.tablaCobros = document.getElementById("plataforma_tbCobros");
        this.lblIngresoTotal = document.getElementById("plataforma_lblIngresoTotal");
        this.lblEstudiantesVigentes = document.getElementById("plataforma_lblEstudiantesVigentes");
        this.lblMayorPlaylistsEstudiante = document.getElementById("plataforma_lblMayorPlaylistsEstudiante");
    }
    onNuevaSuscripcion(callback) {
        this.btNuevaSuscripcion.onclick = callback;
    }
    reportar(informe) {
        this.tablaCobros.replaceChildren();
        informe.cobros.forEach(({ correo, cobro }) => {
            const fila = document.createElement("tr");
            const celdaCorreo = document.createElement("td");
            const celdaCobro = document.createElement("td");
            celdaCorreo.textContent = correo;
            celdaCobro.textContent = `$${cobro.toFixed(2)}`;
            fila.append(celdaCorreo, celdaCobro);
            this.tablaCobros.append(fila);
        });
        this.lblIngresoTotal.textContent = `$${informe.ingresoTotal.toFixed(2)}`;
        this.lblEstudiantesVigentes.textContent =
            `${informe.cntEstudiantesVigentes}`;
        this.lblMayorPlaylistsEstudiante.textContent =
            `${informe.mayorPlaylistsEstudiante}`;
    }
}
//# sourceMappingURL=vPlataformaPlain.js.map