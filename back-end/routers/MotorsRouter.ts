import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { MotorsMannager } from '../mannagers/MotorsMannager'
import { MotorDTO } from '../models/dtos/MotorDTO'
import { checkIdIsANumber, checkProps } from './middleware/VerifyProps'
import { columnsProperties } from '../models/entities/Motor'

export class MotorsRouter extends BaseRouter {
  private MotorsMannager: MotorsMannager
  constructor() {
    super()
    this.MotorsMannager = new MotorsMannager()
    this.buildRoutes()
  }

  private async createMotor(req: express.Request, res: express.Response) {
    const Motor = new MotorDTO(req.body)
    const response = await this.MotorsMannager.createMotor(Motor)
    res.status(200).json(response)
  }

  private async getMotor(req: express.Request, res: express.Response) {
    const response = await this.MotorsMannager.getAllMotor()
    res.status(200).json(response)
  }

  private async updateMotor(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.MotorsMannager.updateMotor(+id, req.body)
    res.status(200).json(response)
  }

  private async getMotorById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.MotorsMannager.getMotorById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      checkProps(Object.keys(columnsProperties)),
      this.createMotor.bind(this)
    )
    this.router.put(
      PARAM_PATH_ID,
      checkIdIsANumber,
      this.updateMotor.bind(this)
    )
    this.router.get(PATH_INICIAL, this.getMotor.bind(this))
    this.router.get(
      PARAM_PATH_ID,
      checkIdIsANumber,
      this.getMotorById.bind(this)
    )
  }
}
