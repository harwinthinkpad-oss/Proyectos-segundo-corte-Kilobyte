export default class MAsistente {
  private _nombre: string = "";
  private _cedula: number = 0;
  private _tipo: "Visitante" | "Cosplayer" = "Visitante";

  constructor({
    nombre,
    cedula,
    tipo,
  }: {
    nombre: string;
    cedula: number;
    tipo: "Visitante" | "Cosplayer";
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.tipo = tipo;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get cedula(): number {
    return this._cedula;
  }
  set cedula(cedula: number) {
    this._cedula = cedula;
  }

  get tipo(): "Visitante" | "Cosplayer" {
    return this._tipo;
  }
  set tipo(tipo: "Visitante" | "Cosplayer") {
    this._tipo = tipo;
  }
  get pago(): number {
    return 0;
  }
}
