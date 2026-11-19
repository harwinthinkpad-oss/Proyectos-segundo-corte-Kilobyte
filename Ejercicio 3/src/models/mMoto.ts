import MEnvio from "./mEnvio.js";

export default class MMoto extends MEnvio {
  private _distancia: number = 0;

  constructor({
    numeroGuia,
    montoPedido,
    distancia,
  }: {
    numeroGuia: string;
    montoPedido: number;
    distancia: number;
  }) {
    super({ numeroGuia, montoPedido });
    this.distancia = distancia;
  }

  get distancia(): number {
    return this._distancia;
  }
  set distancia(distancia: number) {
    this._distancia = distancia;
  }
  get costoEnvio(): number {
    let costo = super.costoEnvio + this.distancia * 0.5;
    if (this.montoPedido > 25) costo -= 1.5;
    return costo;
  }
}
