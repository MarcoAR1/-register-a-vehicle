import Wheels from '../models/entities/Wheels'
import { WheelsDTO } from 'models/dtos/WheelsDTO'

export class WheelsMannager {
  querys: Wheels
  constructor() {
    this.querys = new Wheels()
  }

  async createWheels(data: WheelsDTO): Promise<WheelsDTO> {
    return this.querys.create(data)
  }

  async getAllWheels(): Promise<WheelsDTO[]> {
    return this.querys.getAll()
  }

  async getWheelsById(id: number): Promise<WheelsDTO> {
    return this.querys.getById(id)
  }

  async updateWheels(id: number, data: WheelsDTO): Promise<WheelsDTO> {
    return this.querys.update(id, data)
  }

  async getWheelsCar_id(car_id: number): Promise<WheelsDTO> {
    return this.querys.getByCar_id(car_id)
  }
}
