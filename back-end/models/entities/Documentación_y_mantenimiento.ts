import { Documentación_y_mantenimientoDTO } from '../dtos/Documentación_y_mantenimientoDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IDocumentación_y_mantenimiento } from '../interface/IDocumentación_y_mantenimiento'
import { DOCUMENTACIÓN_Y_MANTENIMIENTOS } from '../../constants/constants'

export class Documentación_Y_Mantenimiento extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = DOCUMENTACIÓN_Y_MANTENIMIENTOS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    cédula_verde__azul__título_del_automotor: 'VARCHAR(50) NOT NULL',
    vtv_vigente: 'VARCHAR(50) NOT NULL',
    segundo_juego_de_llaves: 'VARCHAR(50) NOT NULL',
    informe_de_dominio_histórico: 'VARCHAR(50) NOT NULL',
    escaneo_computarizado: 'VARCHAR(50) NOT NULL',
    verificación_policial_vigente: 'VARCHAR(50) NOT NULL',
    manual_de_usuario_con_servicios_registrados: 'VARCHAR(50) NOT NULL',
    funcionamiento_del_control_remoto: 'VARCHAR(50) NOT NULL',
    libre_de_deudas_financieras__multas_y_patentes: 'VARCHAR(50) NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Documentación_Y_Mantenimiento.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(
    data: IDocumentación_y_mantenimiento
  ): Promise<Documentación_y_mantenimientoDTO> {
    const res = await this.save(data, this.tableName)
    return new Documentación_y_mantenimientoDTO(res)
  }

  public async getAll(): Promise<Documentación_y_mantenimientoDTO[]> {
    const res: IDocumentación_y_mantenimiento[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new Documentación_y_mantenimientoDTO(e))
  }

  public async getById(id: number): Promise<Documentación_y_mantenimientoDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new Documentación_y_mantenimientoDTO(res)
  }

  public async update(
    id: number,
    data: IDocumentación_y_mantenimiento
  ): Promise<Documentación_y_mantenimientoDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new Documentación_y_mantenimientoDTO(res)
  }
}
