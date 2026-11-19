import MAsistente from "./mAsistente.js";

export default class MCosplayer extends MAsistente {
  private _grupal: boolean = false;

  constructor({
    nombre,
    cedula,
    grupal,
  }: {
    nombre: string;
    cedula: number;
    grupal: boolean;
  }) {
    super({ nombre, cedula, tipo: "Cosplayer" });
    this.grupal = grupal;
  }

  get grupal(): boolean {
    return this._grupal;
  }
  set grupal(grupal: boolean) {
    this._grupal = grupal;
  }

  get pago(): number {
    return this.grupal ? 4.5 : 6;
  }
}
