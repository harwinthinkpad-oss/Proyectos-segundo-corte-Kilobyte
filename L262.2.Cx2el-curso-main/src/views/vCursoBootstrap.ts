import { iCurso } from "../interfaces/iCurso.js";

export default class Cl_vCursoBootstrap implements iCurso {
  private lblNotaPromedio: HTMLElement;
  private btNuevoAlumno: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoAlumno = document.getElementById(
      "body_btNuevoAlumno",
    ) as HTMLButtonElement;
    this.lblNotaPromedio = document.getElementById(
      "body_lblNotaPromedio",
    ) as HTMLElement;
  }
  onNuevoAlumno(callback: () => void): void {
    this.btNuevoAlumno.onclick = callback;
  }
  reportar({ notaPromedio }: { notaPromedio: number }): void {
    this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
  }
}
