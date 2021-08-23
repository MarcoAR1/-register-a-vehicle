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
    modelo_identico_de_neumáticos: 'INEGER(1) NOT NULL',
    desgaste_del_neumático: 'INEGER(1) NOT NULL',
    presión_adecuada_del_neumático: 'INEGER(1) NOT NULL',
    llanta_sin_daños: 'INEGER(1) NOT NULL',
    tuercas_de_seguridad: 'INEGER(1) NOT NULL',
    espesor_de_la_pastilla_de_freno: 'INEGER(1) NOT NULL',
    bielas: 'INEGER(1) NOT NULL',
    rótulas: 'INEGER(1) NOT NULL',
    tipo_de_neumático_correcto: 'INEGER(1) NOT NULL',
    desgaste_homogeneo_de_neumáticos: 'INEGER(1) NOT NULL',
    neumático_sin_daños: 'INEGER(1) NOT NULL',
    tornillos_y_llave_de_llanta: 'INEGER(1) NOT NULL',
    espesor_del_disco_de_freno: 'INEGER(1) NOT NULL',
    brazo_de_suspensión: 'INEGER(1) NOT NULL',
    manguetas: 'INEGER(1) NOT NULL',
    extremos_de_dirección: 'INEGER(1) NOT NULL',
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
