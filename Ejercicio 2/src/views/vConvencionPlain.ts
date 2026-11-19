import { iConvencion, RegistroAsistente } from "../interfaces/iConvencion.js";

export default class VConvencionPlain implements iConvencion {
  private readonly btNuevo: HTMLButtonElement;
  private readonly reporte: HTMLElement;
  private detalleAsistentes: string = "";

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoAsistente") as HTMLButtonElement;
    this.reporte = document.getElementById("body_reporte") as HTMLElement;
  }

  onNuevoAsistente(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    asistente,
    totalRecaudado,
    promedioCosplayers,
  }: {
    asistente: RegistroAsistente | null;
    totalRecaudado: number;
    promedioCosplayers: number;
  }): void {
    if (asistente !== null) {
      this.detalleAsistentes += `${asistente.nombre} (${asistente.cedula}) paga: $${this.formatearMonto(asistente.monto)}\n`;
    }
    let texto = this.detalleAsistentes;
    if (this.detalleAsistentes !== "") texto += "\n";
    texto += `Total recaudado en taquilla: $${this.formatearMonto(totalRecaudado)}\n`;
    texto += `Promedio pagado por Cosplayers: $${this.formatearMonto(promedioCosplayers)}`;
    this.reporte.textContent = texto;
  }

  private formatearMonto(monto: number): string {
    return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
  }
}
