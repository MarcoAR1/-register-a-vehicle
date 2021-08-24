import { IDocument } from '../interface/IDocument'
export class DocumentDTO {
  id?: number
  cédula_verde__azul__título_del_automotor?: number
  vtv_vigente?: number
  segundo_juego_de_llaves?: number
  informe_de_dominio_histórico?: number
  escaneo_computarizado?: number
  verificación_policial_vigente?: number
  manual_de_usuario_con_servicios_registrados?: number
  funcionamiento_del_control_remoto?: number
  libre_de_deudas_financieras__multas_y_patentes?: number
  car_id: number

  constructor(data: IDocument) {
    data.id && (this.id = data.id)
    this.cédula_verde__azul__título_del_automotor =
      data.cédula_verde__azul__título_del_automotor
    this.vtv_vigente = data.vtv_vigente
    this.segundo_juego_de_llaves = data.segundo_juego_de_llaves
    this.informe_de_dominio_histórico = data.informe_de_dominio_histórico
    this.escaneo_computarizado = data.escaneo_computarizado
    this.verificación_policial_vigente = data.verificación_policial_vigente
    this.manual_de_usuario_con_servicios_registrados =
      data.manual_de_usuario_con_servicios_registrados
    this.funcionamiento_del_control_remoto =
      data.funcionamiento_del_control_remoto
    this.libre_de_deudas_financieras__multas_y_patentes =
      data.libre_de_deudas_financieras__multas_y_patentes
    this.car_id = data.car_id
  }
}
