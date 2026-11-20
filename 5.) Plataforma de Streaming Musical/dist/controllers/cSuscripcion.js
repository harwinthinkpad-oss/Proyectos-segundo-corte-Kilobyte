import mPlanDuo from "../models/mPlanDuo.js";
import mPlanEstudiante from "../models/mPlanEstudiante.js";
export default class cSuscripcion {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarSuscripcion(callback) {
        this.callback = callback;
        this.vista.limpiarFormulario();
        this.vista.mostrar();
    }
    aceptar() {
        if (!this.vista.validarFormulario())
            return;
        let suscripcion;
        if (this.vista.tipoPlan === "estudiante") {
            suscripcion = new mPlanEstudiante(this.vista.correo, this.vista.carnetVigente, this.vista.cantidadPlaylists);
        }
        else if (this.vista.tipoPlan === "duo") {
            suscripcion = new mPlanDuo(this.vista.correo);
        }
        else {
            this.vista.mostrarError("Selecciona un tipo de plan válido.");
            return;
        }
        this.callback(suscripcion);
        this.vista.ocultar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cSuscripcion.js.map