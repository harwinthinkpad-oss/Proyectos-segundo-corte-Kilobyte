import { iDelivery, RegistroEnvio } from "../interfaces/iDelivery.js";

export default class VDeliveryBootstrap implements iDelivery {
  private readonly btNuevo: HTMLButtonElement;
  private readonly filas: HTMLElement;
  private readonly lblMoto: HTMLElement;
  private readonly lblBici: HTMLElement;
  private readonly lblPromedio: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoEnvio") as HTMLButtonElement;
    this.filas = document.getElementById("body_envios") as HTMLElement;
    this.lblMoto = document.getElementById("body_lblMoto") as HTMLElement;
    this.lblBici = document.getElementById("body_lblBici") as HTMLElement;
    this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLElement;
  }

  onNuevoEnvio(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    envio,
    totalMoto,
    totalBici,
    promedioGeneral,
  }: {
    envio: RegistroEnvio | null;
    totalMoto: number;
    totalBici: number;
    promedioGeneral: number;
  }): void {
    if (envio !== null) {
      const fila = document.createElement("tr");
      const guia = document.createElement("td");
      guia.textContent = envio.numeroGuia;
      const tipo = document.createElement("td");
      tipo.textContent = envio.tipo;
      const costo = document.createElement("td");
      costo.textContent = `$${this.formatearMonto(envio.costo)}`;
      fila.append(guia, tipo, costo);
      this.filas.append(fila);
    }
    this.lblMoto.textContent = `$${this.formatearMonto(totalMoto)}`;
    this.lblBici.textContent = `$${this.formatearMonto(totalBici)}`;
    this.lblPromedio.textContent = `$${this.formatearMonto(promedioGeneral)}`;
  }

  private formatearMonto(monto: number): string {
    return monto.toFixed(2);
  }
}
