export default class MEnvio {
  private _numeroGuia: string = "";
  private _montoPedido: number = 0;

  constructor({
    numeroGuia,
    montoPedido,
  }: {
    numeroGuia: string;
    montoPedido: number;
  }) {
    this.numeroGuia = numeroGuia;
    this.montoPedido = montoPedido;
  }

  get numeroGuia(): string {
    return this._numeroGuia;
  }
  set numeroGuia(numeroGuia: string) {
    this._numeroGuia = numeroGuia;
  }
  get montoPedido(): number {
    return this._montoPedido;
  }
  set montoPedido(montoPedido: number) {
    this._montoPedido = montoPedido;
  }
  get costoEnvio(): number {
    return 2;
  }
}
