import MAsistente from "./mAsistente.js";

export default class MConvencion {
  private acRecaudado: number = 0;
  private acPagoCosplayers: number = 0;
  private cntCosplayers: number = 0;

  procesarAsistente(asistente: MAsistente): void {
    this.acRecaudado += asistente.pago;
    if (asistente.tipo === "Cosplayer") {
      this.acPagoCosplayers += asistente.pago;
      this.cntCosplayers++;
    }
  }

  totalRecaudado(): number {
    return this.acRecaudado;
  }

  promedioCosplayers(): number {
    if (this.cntCosplayers > 0) {
      return this.acPagoCosplayers / this.cntCosplayers;
    }
    return 0;
  }
}
