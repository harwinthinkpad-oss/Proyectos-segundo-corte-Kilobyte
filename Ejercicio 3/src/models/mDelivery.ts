import MBici from "./mBici.js";
import MMoto from "./mMoto.js";

export default class MDelivery {
  private acRecaudadoMoto: number = 0;
  private acRecaudadoBici: number = 0;
  private acCostoEnvios: number = 0;
  private cntEnvios: number = 0;

  procesarEnvioMoto(envio: MMoto): void {
    this.acCostoEnvios += envio.costoEnvio;
    this.cntEnvios++;
    this.acRecaudadoMoto += envio.costoEnvio;
  }

  procesarEnvioBici(envio: MBici): void {
    this.acCostoEnvios += envio.costoEnvio;
    this.cntEnvios++;
    this.acRecaudadoBici += envio.costoEnvio;
  }

  totalMoto(): number {
    return this.acRecaudadoMoto;
  }

  totalBici(): number {
    return this.acRecaudadoBici;
  }

  promedioGeneral(): number {
    if (this.cntEnvios > 0) return this.acCostoEnvios / this.cntEnvios;
    return 0;
  }
}
