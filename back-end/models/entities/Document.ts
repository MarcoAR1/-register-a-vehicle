import { DocumentDTO } from '../dtos/DocumentDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IDocument } from '../interface/IDocument'
import { DOCUMENTACIÓN_Y_MANTENIMIENTOS } from '../../constants/constants'

export class Document extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = DOCUMENTACIÓN_Y_MANTENIMIENTOS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    cédula_verde__azul__título_del_automotor: 'INTEGER NOT NULL',
    vtv_vigente: 'INTEGER NOT NULL',
    segundo_juego_de_llaves: 'INTEGER NOT NULL',
    informe_de_dominio_histórico: 'INTEGER NOT NULL',
    escaneo_computarizado: 'INTEGER NOT NULL',
    verificación_policial_vigente: 'INTEGER NOT NULL',
    manual_de_usuario_con_servicios_registrados: 'INTEGER NOT NULL',
    funcionamiento_del_control_remoto: 'INTEGER NOT NULL',
    libre_de_deudas_financieras__multas_y_patentes: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Document.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IDocument): Promise<DocumentDTO> {
    const res = await this.save(data, this.tableName)
    return new DocumentDTO(res)
  }

  public async getAll(): Promise<DocumentDTO[]> {
    const res: IDocument[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new DocumentDTO(e))
  }

  public async getById(id: number): Promise<DocumentDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new DocumentDTO(res)
  }

  public async update(id: number, data: IDocument): Promise<DocumentDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new DocumentDTO(res)
  }
}
