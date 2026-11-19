export interface iEnvio {
  get numeroGuia(): string;
  get montoPedido(): number;
  get tipo(): "Moto" | "Bici";
  get distancia(): number;
  get bolsaTermica(): boolean;
  get horaPico(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
