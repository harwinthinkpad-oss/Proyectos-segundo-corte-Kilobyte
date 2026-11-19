export default class VEnvioPlain {
    formulario;
    vista;
    inGuia;
    inMontoPedido;
    inTipo;
    inDistancia;
    inBolsaTermica;
    inHoraPico;
    grupoDistancia;
    grupoBici;
    btCancelar;
    constructor() {
        this.formulario = document.getElementById("envio_form");
        this.vista = document.getElementById("envio");
        this.inGuia = document.getElementById("envio_inGuia");
        this.inMontoPedido = document.getElementById("envio_inMontoPedido");
        this.inTipo = document.getElementById("envio_inTipo");
        this.inDistancia = document.getElementById("envio_inDistancia");
        this.inBolsaTermica = document.getElementById("envio_inBolsaTermica");
        this.inHoraPico = document.getElementById("envio_inHoraPico");
        this.grupoDistancia = document.getElementById("envio_grupoDistancia");
        this.grupoBici = document.getElementById("envio_grupoBici");
        this.btCancelar = document.getElementById("envio_btCancelar");
        this.inTipo.onchange = () => this.actualizarCampos();
        this.actualizarCampos();
    }
    get numeroGuia() {
        return this.inGuia.value.trim();
    }
    get montoPedido() {
        return Number(this.inMontoPedido.value);
    }
    get tipo() {
        return this.inTipo.value;
    }
    get distancia() {
        return Number(this.inDistancia.value);
    }
    get bolsaTermica() {
        return this.inBolsaTermica.value === "Si";
    }
    get horaPico() {
        return this.inHoraPico.value === "Si";
    }
    onAceptar(callback) {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            callback();
        };
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.formulario.reset();
        this.actualizarCampos();
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    actualizarCampos() {
        const moto = this.inTipo.value === "Moto";
        this.grupoDistancia.hidden = !moto;
        this.grupoBici.hidden = moto;
        this.inDistancia.required = moto;
    }
}
//# sourceMappingURL=vEnvioPlain.js.map