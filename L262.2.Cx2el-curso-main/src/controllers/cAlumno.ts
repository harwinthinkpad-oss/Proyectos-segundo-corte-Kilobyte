import { iAlumno } from "../interfaces/iAlumno.js";
import mAlumno from "../models/mAlumno.js";

export default class cAlumno {
  private vista: iAlumno;
  private callback!: (alumno: mAlumno | null) => void;
  constructor(vista: iAlumno) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  solicitarAlumno(callback: (alumno: mAlumno | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new mAlumno({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        nota1: this.vista.nota1,
        nota2: this.vista.nota2,
        nota3: this.vista.nota3,
      }),
    );
    this.vista.ocultar();
  }
}
