import MCosplayer from "../models/mCosplayer.js";
import MVisitante from "../models/mVisitante.js";
export default class CAsistente {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.cancelar());
        this.vista.onAceptar(() => this.aceptar());
    }
    solicitarAsistente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
    aceptar() {
        const datos = {
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
        };
        const asistente = this.vista.tipo === "Visitante"
            ? new MVisitante({ ...datos, preventa: this.vista.preventa })
            : new MCosplayer({ ...datos, grupal: this.vista.grupal });
        this.callback(asistente);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cAsistente.js.map