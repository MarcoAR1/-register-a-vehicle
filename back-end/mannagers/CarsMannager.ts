import { QueryResult } from 'pg'
import { CarDTO } from '../models/dtos/CarDTO'
import { Car } from '../models/entities/Car'

export class CarsMannager {
  querys: Car
  constructor() {
    this.querys = new Car()
  }

  async createCar(car: CarDTO): Promise<QueryResult> {
    return this.querys.create(car)
  }
}
