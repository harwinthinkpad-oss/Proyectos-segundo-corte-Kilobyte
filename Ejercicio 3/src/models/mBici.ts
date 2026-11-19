import MEnvio from "./mEnvio.js";

export default class MBici extends MEnvio {
  private _bolsaTermica: boolean = false;
  private _horaPico: boolean = false;

  constructor({
    numeroGuia,
    montoPedido,
    bolsaTermica,
    horaPico,
  }: {
    numeroGuia: string;
    montoPedido: number;
    bolsaTermica: boolean;
    horaPico: boolean;
  }) {
    super({ numeroGuia, montoPedido });
    this.bolsaTermica = bolsaTermica;
    this.horaPico = horaPico;
  }

  get bolsaTermica(): boolean {
    return this._bolsaTermica;
  }
  set bolsaTermica(bolsaTermica: boolean) {
    this._bolsaTermica = bolsaTermica;
  }
  get horaPico(): boolean {
    return this._horaPico;
  }
  set horaPico(horaPico: boolean) {
    this._horaPico = horaPico;
  }
  get costoEnvio(): number {
    let costo = super.costoEnvio;
    if (this.bolsaTermica) costo += 1;
    if (this.horaPico) costo += 1.25;
    return costo;
  }
}
