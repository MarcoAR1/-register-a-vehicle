import { BodyworkDTO } from '../dtos/BodyworkDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IBodywork } from '../interface/IBodywork'
import { BODYWORK } from '../../constants/constants'

export class Bodywork extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = BODYWORK
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    bajos_del_paragolpe_delantero: 'INTEGER NOT NULL',
    capó: 'INTEGER NOT NULL',
    guardabarro_delantero_derecho: 'INTEGER NOT NULL',
    espejo_retrovisor_izquierdo: 'INTEGER NOT NULL',
    panel_exterior___puerta_delantera_izquierda___: 'INTEGER NOT NULL',
    bisagra___puerta_delantera_izquierda___: 'INTEGER NOT NULL',
    manija_exterior___puerta_delantera_derecha___: 'INTEGER NOT NULL',
    parabrisas_delantero: 'INTEGER NOT NULL',
    paragolpe_delantero: 'INTEGER NOT NULL',
    guardabarro_delantero_izquierdo: 'INTEGER NOT NULL',
    parabrisas: 'INTEGER NOT NULL',
    espejo_retrovisor_derecho: 'INTEGER NOT NULL',
    manija___puerta_delantera_izquierda___: 'INTEGER NOT NULL',
    panel_exterior___puerta_delantera_derecha___: 'INTEGER NOT NULL',
    bisagra___puerta_delantera_derecha___: 'INTEGER NOT NULL',
    talonera_izquierda: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Bodywork.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IBodywork): Promise<BodyworkDTO> {
    const res = await this.save(data, this.tableName)
    return new BodyworkDTO(res)
  }

  public async getAll(): Promise<BodyworkDTO[]> {
    const res: IBodywork[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new BodyworkDTO(e))
  }

  public async getById(id: number): Promise<BodyworkDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new BodyworkDTO(res)
  }

  public async update(id: number, data: IBodywork): Promise<BodyworkDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new BodyworkDTO(res)
  }
}
