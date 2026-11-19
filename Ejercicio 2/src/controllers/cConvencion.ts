import CAsistente from "./cAsistente.js";
import { iConvencion, RegistroAsistente } from "../interfaces/iConvencion.js";
import MAsistente from "../models/mAsistente.js";
import MConvencion from "../models/mConvencion.js";

export default class CConvencion {
  private readonly modelo = new MConvencion();
  private readonly vista: iConvencion;
  private readonly controladorAsistente: CAsistente;

  constructor(vista: iConvencion, controladorAsistente: CAsistente) {
    this.vista = vista;
    this.controladorAsistente = controladorAsistente;
    this.vista.onNuevoAsistente(() => this.procesarAsistente());
    this.reportar(null);
  }

  private procesarAsistente(): void {
    this.controladorAsistente.solicitarAsistente((asistente) => {
      if (asistente === null) return;
      this.modelo.procesarAsistente(asistente);
      this.reportar(asistente);
    });
  }

  private reportar(asistente: MAsistente | null): void {
    let registro: RegistroAsistente | null = null;
    if (asistente !== null) {
      registro = {
        nombre: asistente.nombre,
        cedula: asistente.cedula,
        tipo: asistente.tipo,
        monto: asistente.pago,
      };
    }
    this.vista.reportar({
      asistente: registro,
      totalRecaudado: this.modelo.totalRecaudado(),
      promedioCosplayers: this.modelo.promedioCosplayers(),
    });
  }
}
