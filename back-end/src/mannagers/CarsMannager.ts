import Car from '../models/entities/Car'
import { CarDTO } from 'models/dtos/CarDTO'

export class CarsMannager {
  querys: Car
  constructor() {
    this.querys = new Car()
  }

  async createCar(car: CarDTO): Promise<CarDTO> {
    return this.querys.create(car)
  }

  async getAllCars(limit?: number, offset?: number): Promise<CarDTO[]> {
    return this.querys.getAll(limit, offset)
  }

  async getCarById(id: number): Promise<CarDTO> {
    return this.querys.getById(id)
  }

  async updateCar(id: number, car: CarDTO): Promise<CarDTO> {
    return this.querys.update(id, car)
  }
}
