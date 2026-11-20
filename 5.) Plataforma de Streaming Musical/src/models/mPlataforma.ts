import { iCobroSuscripcion } from "../interfaces/iPlataforma.js";
import mPlanEstudiante from "./mPlanEstudiante.js";
import mSuscripcion from "./mSuscripcion.js";

export default class mPlataforma {
  private cobros: iCobroSuscripcion[] = [];
  private acIngresoTotal: number = 0;
  private cntEstudiantesVigentes: number = 0;
  private mayorCantidadPlaylists: number = 0;

  procesarSuscripcion(suscripcion: mSuscripcion): iCobroSuscripcion {
    const cobroUsuario: iCobroSuscripcion = {
      correo: suscripcion.getCorreo(),
      cobro: suscripcion.calcularCobro(),
    };

    this.cobros.push(cobroUsuario);
    this.acIngresoTotal += cobroUsuario.cobro;

    if (
      suscripcion instanceof mPlanEstudiante &&
      suscripcion.getVigente()
    ) {
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

  getCobros(): iCobroSuscripcion[] {
    return this.cobros.map((cobro) => ({ ...cobro }));
  }

  ingresoTotal(): number {
    return this.acIngresoTotal;
  }

  cantEstudiantesVigentes(): number {
    return this.cntEstudiantesVigentes;
  }

  mayorPlaylistsEstudiante(): number {
    return this.mayorCantidadPlaylists;
  }
}
