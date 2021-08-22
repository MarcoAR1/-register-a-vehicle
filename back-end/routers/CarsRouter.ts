import { PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { CarsMannager } from '../mannagers/CarsMannager'

export class CarsRouter extends BaseRouter {
  private CarsMannager: CarsMannager
  constructor() {
    super()
    this.CarsMannager = new CarsMannager()
    this.buildRoutes()
  }

  private async createCar(req: express.Request, res: express.Response) {
    const car = await this.CarsMannager.createCar(req.body)
    res.send(car)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createCar.bind(this))
  }
}
