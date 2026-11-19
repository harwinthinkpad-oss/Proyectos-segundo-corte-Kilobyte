import { iEnvio } from "../interfaces/iEnvio.js";
import MBici from "../models/mBici.js";
import MMoto from "../models/mMoto.js";

export default class CEnvio {
  private readonly vista: iEnvio;
  private callbackMoto!: (envio: MMoto) => void;
  private callbackBici!: (envio: MBici) => void;

  constructor(vista: iEnvio) {
    this.vista = vista;
    this.vista.onCancelar(() => this.cancelar());
    this.vista.onAceptar(() => this.aceptar());
  }

  solicitarEnvio(
    callbackMoto: (envio: MMoto) => void,
    callbackBici: (envio: MBici) => void,
  ): void {
    this.callbackMoto = callbackMoto;
    this.callbackBici = callbackBici;
    this.vista.mostrar();
  }

  private cancelar(): void {
    this.vista.ocultar();
  }

  private aceptar(): void {
    const datos = {
      numeroGuia: this.vista.numeroGuia,
      montoPedido: this.vista.montoPedido,
    };
    if (this.vista.tipo === "Moto") {
      this.callbackMoto(new MMoto({ ...datos, distancia: this.vista.distancia }));
    } else {
      this.callbackBici(
        new MBici({
          ...datos,
          bolsaTermica: this.vista.bolsaTermica,
          horaPico: this.vista.horaPico,
        }),
      );
    }
    this.vista.ocultar();
  }
}
