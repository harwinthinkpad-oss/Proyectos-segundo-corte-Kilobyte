export type RegistroAsistente = {
  nombre: string;
  cedula: number;
  tipo: "Visitante" | "Cosplayer";
  monto: number;
};

export interface iConvencion {
  onNuevoAsistente(callback: () => void): void;
  reportar({
    asistente,
    totalRecaudado,
    promedioCosplayers,
  }: {
    asistente: RegistroAsistente | null;
    totalRecaudado: number;
    promedioCosplayers: number;
  }): void;
}
