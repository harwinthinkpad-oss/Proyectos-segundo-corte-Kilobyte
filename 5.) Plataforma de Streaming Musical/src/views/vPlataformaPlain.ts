import {
  iInformePlataforma,
  iPlataforma,
} from "../interfaces/iPlataforma.js";

export default class vPlataformaPlain implements iPlataforma {
  private btNuevaSuscripcion: HTMLButtonElement;
  private tablaCobros: HTMLTableSectionElement;
  private lblIngresoTotal: HTMLElement;
  private lblEstudiantesVigentes: HTMLElement;
  private lblMayorPlaylistsEstudiante: HTMLElement;

  constructor() {
    this.btNuevaSuscripcion = document.getElementById(
      "plataforma_btNuevaSuscripcion",
    ) as HTMLButtonElement;
    this.tablaCobros = document.getElementById(
      "plataforma_tbCobros",
    ) as HTMLTableSectionElement;
    this.lblIngresoTotal = document.getElementById(
      "plataforma_lblIngresoTotal",
    ) as HTMLElement;
    this.lblEstudiantesVigentes = document.getElementById(
      "plataforma_lblEstudiantesVigentes",
    ) as HTMLElement;
    this.lblMayorPlaylistsEstudiante = document.getElementById(
      "plataforma_lblMayorPlaylistsEstudiante",
    ) as HTMLElement;
  }

  onNuevaSuscripcion(callback: () => void): void {
    this.btNuevaSuscripcion.onclick = callback;
  }

  reportar(informe: iInformePlataforma): void {
    this.tablaCobros.replaceChildren();
    informe.cobros.forEach(({ correo, cobro }) => {
      const fila = document.createElement("tr");
      const celdaCorreo = document.createElement("td");
      const celdaCobro = document.createElement("td");
      celdaCorreo.textContent = correo;
      celdaCobro.textContent = `$${cobro.toFixed(2)}`;
      fila.append(celdaCorreo, celdaCobro);
      this.tablaCobros.append(fila);
    });

    this.lblIngresoTotal.textContent = `$${informe.ingresoTotal.toFixed(2)}`;
    this.lblEstudiantesVigentes.textContent =
      `${informe.cntEstudiantesVigentes}`;
    this.lblMayorPlaylistsEstudiante.textContent =
      `${informe.mayorPlaylistsEstudiante}`;
  }
}
