import { iSuscripcion, TipoPlan } from "../interfaces/iSuscripcion.js";
declare const bootstrap: {
  Modal: new (elemento: HTMLElement) => {
    show(): void;
    hide(): void;
  };
};

export default class vSuscripcionBootstrap implements iSuscripcion {
  private formulario: HTMLFormElement;
  private inCorreo: HTMLInputElement;
  private slTipoPlan: HTMLSelectElement;
  private slCarnetVigente: HTMLSelectElement;
  private inCantidadPlaylists: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private lblError: HTMLElement;
  private modal: InstanceType<typeof bootstrap.Modal>;

  constructor() {
    const elementoModal = document.getElementById("suscripcion") as HTMLElement;
    this.formulario = document.getElementById(
      "suscripcion_form",
    ) as HTMLFormElement;
    this.inCorreo = document.getElementById(
      "suscripcion_inCorreo",
    ) as HTMLInputElement;
    this.slTipoPlan = document.getElementById(
      "suscripcion_slTipoPlan",
    ) as HTMLSelectElement;
    this.slCarnetVigente = document.getElementById(
      "suscripcion_slCarnetVigente",
    ) as HTMLSelectElement;
    this.inCantidadPlaylists = document.getElementById(
      "suscripcion_inCantidadPlaylists",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "suscripcion_btCancelar",
    ) as HTMLButtonElement;
    this.lblError = document.getElementById(
      "suscripcion_lblError",
    ) as HTMLElement;
    this.modal = new bootstrap.Modal(elementoModal);
    this.slTipoPlan.onchange = () => this.actualizarCarnet();
    this.actualizarCarnet();
  }

  get correo(): string {
    return this.inCorreo.value.trim();
  }

  get tipoPlan(): TipoPlan {
    return this.slTipoPlan.value as TipoPlan;
  }

  get carnetVigente(): boolean {
    return this.slCarnetVigente.value === "si";
  }

  get cantidadPlaylists(): number {
    return Number(this.inCantidadPlaylists.value);
  }

  validarFormulario(): boolean {
    this.mostrarError("");
    if (!this.formulario.reportValidity()) return false;
    if (this.tipoPlan !== "estudiante" && this.tipoPlan !== "duo") {
      this.mostrarError("Selecciona un tipo de plan válido.");
      return false;
    }
    if (
      this.tipoPlan === "estudiante" &&
      this.slCarnetVigente.value !== "si" &&
      this.slCarnetVigente.value !== "no"
    ) {
      this.mostrarError("Selecciona si el carnet está vigente.");
      return false;
    }
    if (
      this.tipoPlan === "estudiante" &&
      (!Number.isInteger(this.cantidadPlaylists) ||
        this.cantidadPlaylists < 0)
    ) {
      this.mostrarError("Ingresa una cantidad válida de playlists.");
      return false;
    }
    return true;
  }

  mostrar(): void {
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
  }

  limpiarFormulario(): void {
    this.formulario.reset();
    this.actualizarCarnet();
    this.mostrarError("");
  }

  mostrarError(mensaje: string): void {
    this.lblError.textContent = mensaje;
    this.lblError.hidden = mensaje.length === 0;
  }

  onAceptar(callback: () => void): void {
    this.formulario.onsubmit = (evento) => {
      evento.preventDefault();
      callback();
    };
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  private actualizarCarnet(): void {
    const esEstudiante = this.slTipoPlan.value === "estudiante";
    this.slCarnetVigente.disabled = !esEstudiante;
    this.inCantidadPlaylists.disabled = !esEstudiante;
    this.inCantidadPlaylists.required = esEstudiante;
    if (!esEstudiante) this.slCarnetVigente.value = "no";
  }
}
