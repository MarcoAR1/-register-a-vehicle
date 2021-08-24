import { InsideDTO } from '../dtos/InsideDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IInside } from '../interface/IInside'
import { INSIDE } from '../../constants/constants'

export default class Inside extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = INSIDE
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    asiento_conductor: 'INTEGER NOT NULL',
    asiento_acompañante: 'INTEGER NOT NULL',
    techo: 'INTEGER NOT NULL',
    maletero: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Inside.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IInside): Promise<InsideDTO> {
    const res = await this.save(data, this.tableName)
    return new InsideDTO(res)
  }

  public async getAll(): Promise<InsideDTO[]> {
    const res: IInside[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new InsideDTO(e))
  }

  public async getById(id: number): Promise<InsideDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new InsideDTO(res)
  }

  public async update(id: number, data: IInside): Promise<InsideDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new InsideDTO(res)
  }
}
export const columnsProperties = Inside.columnsProperties
