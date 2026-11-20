export interface iCobroSuscripcion {
  correo: string;
  cobro: number;
}

export interface iInformePlataforma {
  cobros: iCobroSuscripcion[];
  ingresoTotal: number;
  cntEstudiantesVigentes: number;
  mayorPlaylistsEstudiante: number;
}

export interface iPlataforma {
  onNuevaSuscripcion(callback: () => void): void;
  reportar(informe: iInformePlataforma): void;
}
