export default class VAsistentePlain {
    formulario;
    vista;
    inNombre;
    inCedula;
    inTipo;
    inPreventa;
    inGrupal;
    grupoPreventa;
    grupoGrupal;
    btCancelar;
    constructor() {
        this.formulario = document.getElementById("asistente_form");
        this.vista = document.getElementById("asistente");
        this.inNombre = document.getElementById("asistente_inNombre");
        this.inCedula = document.getElementById("asistente_inCedula");
        this.inTipo = document.getElementById("asistente_inTipo");
        this.inPreventa = document.getElementById("asistente_inPreventa");
        this.inGrupal = document.getElementById("asistente_inGrupal");
        this.grupoPreventa = document.getElementById("asistente_grupoPreventa");
        this.grupoGrupal = document.getElementById("asistente_grupoGrupal");
        this.btCancelar = document.getElementById("asistente_btCancelar");
        this.inTipo.onchange = () => this.actualizarCampos();
        this.actualizarCampos();
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return Number(this.inCedula.value);
    }
    get tipo() {
        return this.inTipo.value;
    }
    get preventa() {
        return this.inPreventa.value === "Si";
    }
    get grupal() {
        return this.inGrupal.checked;
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
        const visitante = this.inTipo.value === "Visitante";
        this.grupoPreventa.hidden = !visitante;
        this.grupoGrupal.hidden = visitante;
    }
}
//# sourceMappingURL=vAsistentePlain.js.map