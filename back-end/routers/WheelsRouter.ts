import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { WheelsMannager } from '../mannagers/WheelsMannager'
import { WheelsDTO } from '../models/dtos/WheelsDTO'

export class WheelsRouter extends BaseRouter {
  private WheelsMannager: WheelsMannager
  constructor() {
    super()
    this.WheelsMannager = new WheelsMannager()
    this.buildRoutes()
  }

  private async createWheels(req: express.Request, res: express.Response) {
    const wheels = new WheelsDTO(req.body)
    const response = await this.WheelsMannager.createWheels(wheels)

    res.status(200).json(response)
  }

  private async getWheels(req: express.Request, res: express.Response) {
    const response = await this.WheelsMannager.getAllWheels()
    res.status(200).json(response)
  }

  private async updateWheels(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.WheelsMannager.updateWheels(+id, req.body)
    res.status(200).json(response)
  }

  private async getWheelsById(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.WheelsMannager.getWheelsById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createWheels.bind(this))
    this.router.put(PARAM_PATH_ID, this.updateWheels.bind(this))
    this.router.get(PATH_INICIAL, this.getWheels.bind(this))
    this.router.get(PARAM_PATH_ID, this.getWheelsById.bind(this))
  }
}
