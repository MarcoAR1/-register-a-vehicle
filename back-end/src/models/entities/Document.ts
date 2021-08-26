import { DocumentDTO } from '../dtos/DocumentDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IDocument } from '../interface/IDocument'
import { DOCUMENTACIÓN_Y_MANTENIMIENTOS } from '../../constants/constants'

export default class Document extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = DOCUMENTACIÓN_Y_MANTENIMIENTOS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    cédula_verde__azul__título_del_automotor: 'INTEGER DEFAULT 0',
    vtv_vigente: 'INTEGER DEFAULT 0',
    segundo_juego_de_llaves: 'INTEGER DEFAULT 0',
    informe_de_dominio_histórico: 'INTEGER DEFAULT 0',
    escaneo_computarizado: 'INTEGER DEFAULT 0',
    verificación_policial_vigente: 'INTEGER DEFAULT 0',
    manual_de_usuario_con_servicios_registrados: 'INTEGER DEFAULT 0',
    funcionamiento_del_control_remoto: 'INTEGER DEFAULT 0',
    libre_de_deudas_financieras__multas_y_patentes: 'INTEGER DEFAULT 0',
    car_id: 'INTEGER REFERENCES car(id) ON DELETE CASCADE UNIQUE',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Document.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: DocumentDTO): Promise<DocumentDTO> {
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

  public async update(id: number, data: DocumentDTO): Promise<DocumentDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new DocumentDTO(res)
  }

  public async getByCar_id(car_id: number): Promise<DocumentDTO> {
    const res = await this.findOne({ car_id }, this.tableName)
    return new DocumentDTO(res)
  }
}

export const columnsProperties = Document.columnsProperties
