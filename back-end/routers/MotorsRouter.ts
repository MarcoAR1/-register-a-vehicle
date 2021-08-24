import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { MotorsMannager } from '../mannagers/MotorsMannager'
import { MotorDTO } from '../models/dtos/MotorDTO'

export class MotorsRouter extends BaseRouter {
  private MotorMannager: MotorsMannager
  constructor() {
    super()
    this.MotorMannager = new MotorsMannager()
    this.buildRoutes()
  }

  private async createMotor(req: express.Request, res: express.Response) {
    const Motor = new MotorDTO(req.body)
    const response = await this.MotorMannager.createMotor(Motor)

    res.status(200).json(response)
  }

  private async getMotor(req: express.Request, res: express.Response) {
    const response = await this.MotorMannager.getAllMotor()
    res.status(200).json(response)
  }

  private async updateMotor(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.MotorMannager.updateMotor(+id, req.body)
    res.status(200).json(response)
  }

  private async getMotorById(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.MotorMannager.getMotorById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createMotor.bind(this))
    this.router.put(PARAM_PATH_ID, this.updateMotor.bind(this))
    this.router.get(PATH_INICIAL, this.getMotor.bind(this))
    this.router.get(PARAM_PATH_ID, this.getMotorById.bind(this))
  }
}
