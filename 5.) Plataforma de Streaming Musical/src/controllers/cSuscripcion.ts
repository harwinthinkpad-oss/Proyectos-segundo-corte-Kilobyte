import { iSuscripcion } from "../interfaces/iSuscripcion.js";
import mPlanDuo from "../models/mPlanDuo.js";
import mPlanEstudiante from "../models/mPlanEstudiante.js";
import mSuscripcion from "../models/mSuscripcion.js";

export default class cSuscripcion {
  private vista: iSuscripcion;
  private callback!: (suscripcion: mSuscripcion | null) => void;

  constructor(vista: iSuscripcion) {
    this.vista = vista;
    this.vista.onAceptar(() => this.aceptar());
    this.vista.onCancelar(() => this.cancelar());
  }

  solicitarSuscripcion(callback: (suscripcion: mSuscripcion | null) => void) {
    this.callback = callback;
    this.vista.limpiarFormulario();
    this.vista.mostrar();
  }

  private aceptar(): void {
    if (!this.vista.validarFormulario()) return;

    let suscripcion: mSuscripcion;
    if (this.vista.tipoPlan === "estudiante") {
      suscripcion = new mPlanEstudiante(
        this.vista.correo,
        this.vista.carnetVigente,
        this.vista.cantidadPlaylists,
      );
    } else if (this.vista.tipoPlan === "duo") {
      suscripcion = new mPlanDuo(this.vista.correo);
    } else {
      this.vista.mostrarError("Selecciona un tipo de plan válido.");
      return;
    }

    this.callback(suscripcion);
    this.vista.ocultar();
  }

  private cancelar(): void {
    this.callback(null);
    this.vista.ocultar();
  }
}
