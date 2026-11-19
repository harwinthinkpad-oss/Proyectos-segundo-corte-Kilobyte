import CEnvio from "./cEnvio.js";
import { iDelivery, RegistroEnvio } from "../interfaces/iDelivery.js";
import MBici from "../models/mBici.js";
import MDelivery from "../models/mDelivery.js";
import MMoto from "../models/mMoto.js";

export default class CDelivery {
  private modelo = new MDelivery();
  private readonly vista: iDelivery;
  private readonly controladorEnvio: CEnvio;

  constructor(vista: iDelivery, controladorEnvio: CEnvio) {
    this.vista = vista;
    this.controladorEnvio = controladorEnvio;
    this.vista.onNuevoEnvio(() => this.procesarEnvio());
    this.reportar(null);
  }

  private procesarEnvio(): void {
    this.controladorEnvio.solicitarEnvio(
      (envio) => this.procesarEnvioMoto(envio),
      (envio) => this.procesarEnvioBici(envio),
    );
  }

  private procesarEnvioMoto(envio: MMoto): void {
    this.modelo.procesarEnvioMoto(envio);
    this.reportar({
      numeroGuia: envio.numeroGuia,
      tipo: "Moto",
      costo: envio.costoEnvio,
    });
  }

  private procesarEnvioBici(envio: MBici): void {
    this.modelo.procesarEnvioBici(envio);
    this.reportar({
      numeroGuia: envio.numeroGuia,
      tipo: "Bici",
      costo: envio.costoEnvio,
    });
  }

  private reportar(envio: RegistroEnvio | null): void {
    this.vista.reportar({
      envio,
      totalMoto: this.modelo.totalMoto(),
      totalBici: this.modelo.totalBici(),
      promedioGeneral: this.modelo.promedioGeneral(),
    });
  }
}
