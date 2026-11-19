export default class MAsistente {
    _nombre = "";
    _cedula = 0;
    _tipo = "Visitante";
    constructor({ nombre, cedula, tipo, }) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.tipo = tipo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get pago() {
        return 0;
    }
}
//# sourceMappingURL=mAsistente.js.map