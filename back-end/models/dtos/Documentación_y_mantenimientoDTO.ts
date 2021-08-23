import { IDocumentación_y_mantenimiento } from '../interface/IDocumentación_y_mantenimiento'
export class Documentación_y_mantenimientoDTO {
  id?: number
  cédula_verde__azul__título_del_automotor: string
  vtv_vigente: string
  segundo_juego_de_llaves: string
  informe_de_dominio_histórico: string
  escaneo_computarizado: string
  verificación_policial_vigente: string
  manual_de_usuario_con_servicios_registrados: string
  funcionamiento_del_control_remoto: string
  libre_de_deudas_financieras__multas_y_patentes: string

  constructor(document_y_mantenimiento: IDocumentación_y_mantenimiento) {
    document_y_mantenimiento.id && (this.id = document_y_mantenimiento.id)
  }
}
