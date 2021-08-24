import { IGeneral } from '../models/interface/IGeneral'
import General from '../models/entities/General'
import { GeneralDTO } from 'models/dtos/GeneralDTO'

export class GeneralsMannager {
  querys: General
  constructor() {
    this.querys = new General()
  }

  async createGeneral(general: IGeneral): Promise<GeneralDTO> {
    return this.querys.create(general)
  }

  async getAllGenerals(): Promise<GeneralDTO[]> {
    return this.querys.getAll()
  }

  async getGeneralById(id: number): Promise<GeneralDTO> {
    return this.querys.getById(id)
  }

  async updateGeneral(id: number, general: IGeneral): Promise<GeneralDTO> {
    return this.querys.update(id, general)
  }
}
