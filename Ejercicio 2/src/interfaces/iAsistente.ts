export interface iAsistente {
  get nombre(): string;
  get cedula(): number;
  get tipo(): "Visitante" | "Cosplayer";
  get preventa(): boolean;
  get grupal(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
