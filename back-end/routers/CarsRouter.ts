import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { CarsMannager } from '../mannagers/CarsMannager'
import { CarDTO } from '../models/dtos/CarDTO'

export class CarsRouter extends BaseRouter {
  private CarsMannager: CarsMannager
  constructor() {
    super()
    this.CarsMannager = new CarsMannager()
    this.buildRoutes()
  }

  private async createCar(req: express.Request, res: express.Response) {
    const car = new CarDTO(req.body)
    const response = await this.CarsMannager.createCar(car)
    res.status(200).json(response)
  }

  private async getCars(req: express.Request, res: express.Response) {
    const cars = await this.CarsMannager.getAllCars()
    res.status(200).json(cars)
  }

  private async updateCar(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const car = await this.CarsMannager.updateCar(+id, req.body)
    res.status(200).json(car)
  }

  private async getCarById(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const car = await this.CarsMannager.getCarById(+id)
    res.status(200).json(car)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createCar.bind(this))
    this.router.put(PARAM_PATH_ID, this.updateCar.bind(this))
    this.router.get(PATH_INICIAL, this.getCars.bind(this))
    this.router.get(PARAM_PATH_ID, this.getCarById.bind(this))
  }
}
