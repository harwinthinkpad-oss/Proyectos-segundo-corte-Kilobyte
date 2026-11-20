import mPlataforma from "../models/mPlataforma.js";
export default class cPlataforma {
    mPlataforma = new mPlataforma();
    vista;
    cSuscripcion;
    constructor(vista, controladorSuscripcion) {
        this.vista = vista;
        this.cSuscripcion = controladorSuscripcion;
        this.vista.onNuevaSuscripcion(() => this.solicitarSuscripcion());
    }
    solicitarSuscripcion() {
        this.cSuscripcion.solicitarSuscripcion((suscripcion) => {
            if (suscripcion === null)
                return;
            const cobroUsuario = this.mPlataforma.procesarSuscripcion(suscripcion);
            const informe = {
                cobros: this.mPlataforma.getCobros(),
                ingresoTotal: this.mPlataforma.ingresoTotal(),
                cntEstudiantesVigentes: this.mPlataforma.cantEstudiantesVigentes(),
                mayorPlaylistsEstudiante: this.mPlataforma.mayorPlaylistsEstudiante(),
            };
            this.vista.reportar(informe);
        });
    }
}
//# sourceMappingURL=cPlataforma.js.map