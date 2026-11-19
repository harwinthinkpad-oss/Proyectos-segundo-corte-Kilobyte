export type RegistroEnvio = {
  numeroGuia: string;
  tipo: "Moto" | "Bici";
  costo: number;
};

export interface iDelivery {
  onNuevoEnvio(callback: () => void): void;
  reportar({
    envio,
    totalMoto,
    totalBici,
    promedioGeneral,
  }: {
    envio: RegistroEnvio | null;
    totalMoto: number;
    totalBici: number;
    promedioGeneral: number;
  }): void;
}
