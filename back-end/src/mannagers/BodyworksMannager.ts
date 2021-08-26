import Bodywork from '../models/entities/Bodywork'
import { BodyworkDTO } from 'models/dtos/BodyworkDTO'

export class BodyworksMannager {
  querys: Bodywork
  constructor() {
    this.querys = new Bodywork()
  }

  async createBodywork(data: BodyworkDTO): Promise<BodyworkDTO> {
    return this.querys.create(data)
  }

  async getAllBodywork(): Promise<BodyworkDTO[]> {
    return this.querys.getAll()
  }

  async getBodyworkById(id: number): Promise<BodyworkDTO> {
    return this.querys.getById(id)
  }

  async updateBodywork(id: number, data: BodyworkDTO): Promise<BodyworkDTO> {
    return this.querys.update(id, data)
  }

  async getBodyworkCar_id(car_id: number): Promise<BodyworkDTO> {
    return this.querys.getByCar_id(car_id)
  }
}
