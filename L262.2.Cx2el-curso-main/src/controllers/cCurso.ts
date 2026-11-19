/**
 * LOS ESTUDIANTES
 * Se desea conocer la nota promedio de los alumnos de un curso.
 * Se conoce de cada alumno: nombre, cedula, nota1, nota2 y nota3.
 * La nota de un alumno es la suma de sus 3 notas.
 * La nota promedio es el promedio de las notas de todos los alumnos.
 *
 * Considere que la clase alumno hereda de una clase persona
 * con los atributos: nombre, cedula
 */

import mCurso from "../models/mCurso.js";
import { iCurso } from "../interfaces/iCurso.js";
import cAlumno from "./cAlumno.js";

export default class cCurso {
  private mCurso: mCurso = new mCurso();
  private iCurso: iCurso;
  private cAlumno: cAlumno;

  // Recibe la vista de la bodega y el controlador del Alumno ya armado
  constructor(vistaCurso: iCurso, controladorAlumno: cAlumno) {
    this.iCurso = vistaCurso;
    this.cAlumno = controladorAlumno;

    this.iCurso.onNuevoAlumno(() => this.procesar1Alumno());
  }

  private procesar1Alumno() {
    this.cAlumno.solicitarAlumno((alumno) => {
      if (alumno !== null) {
        this.mCurso.procesarAlumno(alumno);
        this.iCurso.reportar({ notaPromedio: this.mCurso.notaPromedio()});
      }
    });
  }
}
