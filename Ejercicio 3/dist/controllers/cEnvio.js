import MBici from "../models/mBici.js";
import MMoto from "../models/mMoto.js";
export default class CEnvio {
    vista;
    callbackMoto;
    callbackBici;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.cancelar());
        this.vista.onAceptar(() => this.aceptar());
    }
    solicitarEnvio(callbackMoto, callbackBici) {
        this.callbackMoto = callbackMoto;
        this.callbackBici = callbackBici;
        this.vista.mostrar();
    }
    cancelar() {
        this.vista.ocultar();
    }
    aceptar() {
        const datos = {
            numeroGuia: this.vista.numeroGuia,
            montoPedido: this.vista.montoPedido,
        };
        if (this.vista.tipo === "Moto") {
            this.callbackMoto(new MMoto({ ...datos, distancia: this.vista.distancia }));
        }
        else {
            this.callbackBici(new MBici({
                ...datos,
                bolsaTermica: this.vista.bolsaTermica,
                horaPico: this.vista.horaPico,
            }));
        }
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cEnvio.js.map