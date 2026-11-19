import { iEnvio } from "../interfaces/iEnvio.js";

export default class VEnvioPlain implements iEnvio {
  private readonly formulario: HTMLFormElement;
  private readonly vista: HTMLElement;
  private readonly inGuia: HTMLInputElement;
  private readonly inMontoPedido: HTMLInputElement;
  private readonly inTipo: HTMLSelectElement;
  private readonly inDistancia: HTMLInputElement;
  private readonly inBolsaTermica: HTMLSelectElement;
  private readonly inHoraPico: HTMLSelectElement;
  private readonly grupoDistancia: HTMLElement;
  private readonly grupoBici: HTMLElement;
  private readonly btCancelar: HTMLButtonElement;

  constructor() {
    this.formulario = document.getElementById("envio_form") as HTMLFormElement;
    this.vista = document.getElementById("envio") as HTMLElement;
    this.inGuia = document.getElementById("envio_inGuia") as HTMLInputElement;
    this.inMontoPedido = document.getElementById("envio_inMontoPedido") as HTMLInputElement;
    this.inTipo = document.getElementById("envio_inTipo") as HTMLSelectElement;
    this.inDistancia = document.getElementById("envio_inDistancia") as HTMLInputElement;
    this.inBolsaTermica = document.getElementById("envio_inBolsaTermica") as HTMLSelectElement;
    this.inHoraPico = document.getElementById("envio_inHoraPico") as HTMLSelectElement;
    this.grupoDistancia = document.getElementById("envio_grupoDistancia") as HTMLElement;
    this.grupoBici = document.getElementById("envio_grupoBici") as HTMLElement;
    this.btCancelar = document.getElementById("envio_btCancelar") as HTMLButtonElement;
    this.inTipo.onchange = () => this.actualizarCampos();
    this.actualizarCampos();
  }

  get numeroGuia(): string {
    return this.inGuia.value.trim();
  }
  get montoPedido(): number {
    return Number(this.inMontoPedido.value);
  }
  get tipo(): "Moto" | "Bici" {
    return this.inTipo.value as "Moto" | "Bici";
  }
  get distancia(): number {
    return Number(this.inDistancia.value);
  }
  get bolsaTermica(): boolean {
    return this.inBolsaTermica.value === "Si";
  }
  get horaPico(): boolean {
    return this.inHoraPico.value === "Si";
  }

  onAceptar(callback: () => void): void {
    this.formulario.onsubmit = (event) => {
      event.preventDefault();
      callback();
    };
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.formulario.reset();
    this.actualizarCampos();
    this.vista.hidden = false;
  }
  ocultar(): void {
    this.vista.hidden = true;
  }

  private actualizarCampos(): void {
    const moto = this.inTipo.value === "Moto";
    this.grupoDistancia.hidden = !moto;
    this.grupoBici.hidden = moto;
    this.inDistancia.required = moto;
  }
}
