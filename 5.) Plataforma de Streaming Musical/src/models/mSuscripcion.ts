export default class mSuscripcion {
  private readonly correo: string;
  private readonly tarifaBase: number = 6;

  constructor(correo: string) {
    this.correo = correo;
  }

  getCorreo(): string {
    return this.correo;
  }

  getTarifaBase(): number {
    return this.tarifaBase;
  }

  calcularCobro(): number {
    return this.getTarifaBase();
  }
}
