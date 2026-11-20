import mSuscripcion from "./mSuscripcion.js";

export default class mPlanEstudiante extends mSuscripcion {
  private readonly vigente: boolean;
  private readonly cantidadPlaylists: number;

  constructor(correo: string, vigente: boolean, cantidadPlaylists: number) {
    super(correo);
    this.vigente = vigente;
    this.cantidadPlaylists = cantidadPlaylists;
  }

  getVigente(): boolean {
    return this.vigente;
  }

  getCantidadPlaylists(): number {
    return this.cantidadPlaylists;
  }

  calcularCobro(): number {
    return this.getVigente()
      ? this.getTarifaBase() * 0.5
      : this.getTarifaBase();
  }
}
