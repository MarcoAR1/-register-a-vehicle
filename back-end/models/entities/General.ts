import { GeneralDTO } from '../dtos/GeneralDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IGeneral } from '../interface/IGeneral'
import { GENERALS } from '../../constants/constants'
export default class General extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = GENERALS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    marca: 'VARCHAR(50) NOT NULL',
    modelo: 'VARCHAR(50) NOT NULL',
    generación: 'VARCHAR(50) NOT NULL',
    motor: 'VARCHAR(50) NOT NULL',
    tipo_de_carrocería: 'VARCHAR(50) NOT NULL',
    numero_de_puertas: 'VARCHAR(50) NOT NULL',
    numero_de_plazas: 'VARCHAR(50) NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = General.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IGeneral): Promise<GeneralDTO> {
    const res = await this.save(data, this.tableName)
    return new GeneralDTO(res)
  }

  public async getAll(): Promise<GeneralDTO[]> {
    const res: IGeneral[] = await this.findAll({ tableName: this.tableName })
    return res.map((e) => new GeneralDTO(e))
  }

  public async getById(id: number): Promise<GeneralDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new GeneralDTO(res)
  }

  public async update(id: number, data: IGeneral): Promise<GeneralDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new GeneralDTO(res)
  }
}
export const columnsProperties = General.columnsProperties
