import MAsistente from "./mAsistente.js";

export default class MVisitante extends MAsistente {
  private _preventa: boolean = false;

  constructor({
    nombre,
    cedula,
    preventa,
  }: {
    nombre: string;
    cedula: number;
    preventa: boolean;
  }) {
    super({ nombre, cedula, tipo: "Visitante" });
    this.preventa = preventa;
  }

  get preventa(): boolean {
    return this._preventa;
  }
  set preventa(preventa: boolean) {
    this._preventa = preventa;
  }

  get pago(): number {
    return this.preventa ? 8 : 10;
  }
}
