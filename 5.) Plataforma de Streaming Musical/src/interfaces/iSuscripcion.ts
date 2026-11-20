export type TipoPlan = "" | "estudiante" | "duo";

export interface iSuscripcion {
  get correo(): string;
  get tipoPlan(): TipoPlan;
  get carnetVigente(): boolean;
  get cantidadPlaylists(): number;
  validarFormulario(): boolean;
  mostrar(): void;
  ocultar(): void;
  limpiarFormulario(): void;
  mostrarError(mensaje: string): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
