import mAlumno from "./mAlumno.js";

export default class mCurso {
  private acNotas: number = 0;
  private cntAlumnos: number = 0;

  procesarAlumno(a: mAlumno): void {
    this.acNotas += a.nota;
    this.cntAlumnos++;
  }

  notaPromedio(): number {
    if (this.cntAlumnos > 0) return this.acNotas / 3;
    return 0;
  }
}
