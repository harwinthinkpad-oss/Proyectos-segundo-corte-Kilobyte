import mSuscripcion from "./mSuscripcion.js";
export default class mPlanEstudiante extends mSuscripcion {
    vigente;
    cantidadPlaylists;
    constructor(correo, vigente, cantidadPlaylists) {
        super(correo);
        this.vigente = vigente;
        this.cantidadPlaylists = cantidadPlaylists;
    }
    getVigente() {
        return this.vigente;
    }
    getCantidadPlaylists() {
        return this.cantidadPlaylists;
    }
    calcularCobro() {
        return this.getVigente()
            ? this.getTarifaBase() * 0.5
            : this.getTarifaBase();
    }
}
//# sourceMappingURL=mPlanEstudiante.js.map