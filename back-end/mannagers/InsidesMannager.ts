import Inside from '../models/entities/Inside'
import { InsideDTO } from 'models/dtos/InsideDTO'

export class InsidesMannager {
  querys: Inside
  constructor() {
    this.querys = new Inside()
  }

  async createInside(data: InsideDTO): Promise<InsideDTO> {
    return this.querys.create(data)
  }

  async getAllInside(): Promise<InsideDTO[]> {
    return this.querys.getAll()
  }

  async getInsideById(id: number): Promise<InsideDTO> {
    return this.querys.getById(id)
  }

  async updateInside(id: number, data: InsideDTO): Promise<InsideDTO> {
    return this.querys.update(id, data)
  }
}
