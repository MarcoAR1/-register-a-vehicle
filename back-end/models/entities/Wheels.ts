import { WheelsDTO } from '../dtos/WheelsDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IWheels } from '../interface/IWheels'
import { WHEELS } from '../../constants/constants'

export class Wheels extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = WHEELS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    modelo_identico_de_neumáticos: 'INTEGER NOT NULL',
    desgaste_del_neumático: 'INTEGER NOT NULL',
    presión_adecuada_del_neumático: 'INTEGER NOT NULL',
    llanta_sin_daños: 'INTEGER NOT NULL',
    tuercas_de_seguridad: 'INTEGER NOT NULL',
    espesor_de_la_pastilla_de_freno: 'INTEGER NOT NULL',
    bielas: 'INTEGER NOT NULL',
    rótulas: 'INTEGER NOT NULL',
    tipo_de_neumático_correcto: 'INTEGER NOT NULL',
    desgaste_homogeneo_de_neumáticos: 'INTEGER NOT NULL',
    neumático_sin_daños: 'INTEGER NOT NULL',
    tornillos_y_llave_de_llanta: 'INTEGER NOT NULL',
    espesor_del_disco_de_freno: 'INTEGER NOT NULL',
    brazo_de_suspensión: 'INTEGER NOT NULL',
    manguetas: 'INTEGER NOT NULL',
    extremos_de_dirección: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Wheels.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IWheels): Promise<WheelsDTO> {
    const res = await this.save(data, this.tableName)
    return new WheelsDTO(res)
  }

  public async getAll(): Promise<WheelsDTO[]> {
    const res: IWheels[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new WheelsDTO(e))
  }

  public async getById(id: number): Promise<WheelsDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new WheelsDTO(res)
  }

  public async update(id: number, data: IWheels): Promise<WheelsDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new WheelsDTO(res)
  }
}
