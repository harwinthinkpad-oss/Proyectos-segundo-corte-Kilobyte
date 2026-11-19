import { iAsistente } from "../interfaces/iAsistente.js";

export default class VAsistentePlain implements iAsistente {
  private readonly formulario: HTMLFormElement;
  private readonly vista: HTMLElement;
  private readonly inNombre: HTMLInputElement;
  private readonly inCedula: HTMLInputElement;
  private readonly inTipo: HTMLSelectElement;
  private readonly inPreventa: HTMLSelectElement;
  private readonly inGrupal: HTMLInputElement;
  private readonly grupoPreventa: HTMLElement;
  private readonly grupoGrupal: HTMLElement;
  private readonly btCancelar: HTMLButtonElement;

  constructor() {
    this.formulario = document.getElementById("asistente_form") as HTMLFormElement;
    this.vista = document.getElementById("asistente") as HTMLElement;
    this.inNombre = document.getElementById("asistente_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("asistente_inCedula") as HTMLInputElement;
    this.inTipo = document.getElementById("asistente_inTipo") as HTMLSelectElement;
    this.inPreventa = document.getElementById("asistente_inPreventa") as HTMLSelectElement;
    this.inGrupal = document.getElementById("asistente_inGrupal") as HTMLInputElement;
    this.grupoPreventa = document.getElementById("asistente_grupoPreventa") as HTMLElement;
    this.grupoGrupal = document.getElementById("asistente_grupoGrupal") as HTMLElement;
    this.btCancelar = document.getElementById("asistente_btCancelar") as HTMLButtonElement;
    this.inTipo.onchange = () => this.actualizarCampos();
    this.actualizarCampos();
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return Number(this.inCedula.value);
  }
  get tipo(): "Visitante" | "Cosplayer" {
    return this.inTipo.value as "Visitante" | "Cosplayer";
  }
  get preventa(): boolean {
    return this.inPreventa.value === "Si";
  }
  get grupal(): boolean {
    return this.inGrupal.checked;
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
    const visitante = this.inTipo.value === "Visitante";
    this.grupoPreventa.hidden = !visitante;
    this.grupoGrupal.hidden = visitante;
  }
}
