import {
  iInformePlataforma,
  iPlataforma,
} from "../interfaces/iPlataforma.js";
import mPlataforma from "../models/mPlataforma.js";
import cSuscripcion from "./cSuscripcion.js";

export default class cPlataforma {
  private mPlataforma: mPlataforma = new mPlataforma();
  private vista: iPlataforma;
  private cSuscripcion: cSuscripcion;

  constructor(vista: iPlataforma, controladorSuscripcion: cSuscripcion) {
    this.vista = vista;
    this.cSuscripcion = controladorSuscripcion;
    this.vista.onNuevaSuscripcion(() => this.solicitarSuscripcion());
  }

  private solicitarSuscripcion(): void {
    this.cSuscripcion.solicitarSuscripcion((suscripcion) => {
      if (suscripcion === null) return;
      const cobroUsuario = this.mPlataforma.procesarSuscripcion(suscripcion);

      const informe: iInformePlataforma = {
        cobros: this.mPlataforma.getCobros(),
        ingresoTotal: this.mPlataforma.ingresoTotal(),
        cntEstudiantesVigentes: this.mPlataforma.cantEstudiantesVigentes(),
        mayorPlaylistsEstudiante: this.mPlataforma.mayorPlaylistsEstudiante(),
      };

      this.vista.reportar(informe);
    });
  }
}
