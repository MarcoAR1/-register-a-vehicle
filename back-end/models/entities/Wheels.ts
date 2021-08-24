import { WheelsDTO } from '../dtos/WheelsDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IWheels } from '../interface/IWheels'
import { WHEELS } from '../../constants/constants'

export default class Wheels extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = WHEELS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    modelo_identico_de_neumáticos: 'INTEGER DEFAULT 0',
    desgaste_del_neumático: 'INTEGER DEFAULT 0',
    presión_adecuada_del_neumático: 'INTEGER DEFAULT 0',
    llanta_sin_daños: 'INTEGER DEFAULT 0',
    tuercas_de_seguridad: 'INTEGER DEFAULT 0',
    espesor_de_la_pastilla_de_freno: 'INTEGER DEFAULT 0',
    bielas: 'INTEGER DEFAULT 0',
    rótulas: 'INTEGER DEFAULT 0',
    tipo_de_neumático_correcto: 'INTEGER DEFAULT 0',
    desgaste_homogeneo_de_neumáticos: 'INTEGER DEFAULT 0',
    neumático_sin_daños: 'INTEGER DEFAULT 0',
    tornillos_y_llave_de_llanta: 'INTEGER DEFAULT 0',
    espesor_del_disco_de_freno: 'INTEGER DEFAULT 0',
    brazo_de_suspensión: 'INTEGER DEFAULT 0',
    manguetas: 'INTEGER DEFAULT 0',
    extremos_de_dirección: 'INTEGER DEFAULT 0',
    car_id: 'INTEGER REFERENCES car(id) ON DELETE CASCADE UNIQUE',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Wheels.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: WheelsDTO): Promise<WheelsDTO> {
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

  public async update(id: number, data: WheelsDTO): Promise<WheelsDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new WheelsDTO(res)
  }
}
export const columnsProperties = Wheels.columnsProperties
