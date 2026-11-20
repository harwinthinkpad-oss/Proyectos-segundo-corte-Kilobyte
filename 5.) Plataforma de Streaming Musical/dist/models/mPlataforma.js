import mPlanEstudiante from "./mPlanEstudiante.js";
export default class mPlataforma {
    cobros = [];
    acIngresoTotal = 0;
    cntEstudiantesVigentes = 0;
    mayorCantidadPlaylists = 0;
    procesarSuscripcion(suscripcion) {
        const cobroUsuario = {
            correo: suscripcion.getCorreo(),
            cobro: suscripcion.calcularCobro(),
        };
        this.cobros.push(cobroUsuario);
        this.acIngresoTotal += cobroUsuario.cobro;
        if (suscripcion instanceof mPlanEstudiante &&
            suscripcion.getVigente()) {
            this.cntEstudiantesVigentes++;
        }
        if (suscripcion instanceof mPlanEstudiante) {
            const cantidad = suscripcion.getCantidadPlaylists();
            if (cantidad > this.mayorCantidadPlaylists) {
                this.mayorCantidadPlaylists = cantidad;
            }
        }
        return { ...cobroUsuario };
    }
    getCobros() {
        return this.cobros.map((cobro) => ({ ...cobro }));
    }
    ingresoTotal() {
        return this.acIngresoTotal;
    }
    cantEstudiantesVigentes() {
        return this.cntEstudiantesVigentes;
    }
    mayorPlaylistsEstudiante() {
        return this.mayorCantidadPlaylists;
    }
}
//# sourceMappingURL=mPlataforma.js.map