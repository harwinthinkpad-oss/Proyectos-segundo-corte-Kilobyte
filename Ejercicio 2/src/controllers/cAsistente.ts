import { iAsistente } from "../interfaces/iAsistente.js";
import MCosplayer from "../models/mCosplayer.js";
import MAsistente from "../models/mAsistente.js";
import MVisitante from "../models/mVisitante.js";

export default class CAsistente {
  private readonly vista: iAsistente;
  private callback!: (asistente: MAsistente | null) => void;

  constructor(vista: iAsistente) {
    this.vista = vista;
    this.vista.onCancelar(() => this.cancelar());
    this.vista.onAceptar(() => this.aceptar());
  }

  solicitarAsistente(callback: (asistente: MAsistente | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private cancelar(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private aceptar(): void {
    const datos = {
      nombre: this.vista.nombre,
      cedula: this.vista.cedula,
    };
    const asistente =
      this.vista.tipo === "Visitante"
        ? new MVisitante({ ...datos, preventa: this.vista.preventa })
        : new MCosplayer({ ...datos, grupal: this.vista.grupal });
    this.callback(asistente);
    this.vista.ocultar();
  }
}
