import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { InsidesMannager } from '../mannagers/InsidesMannager'
import { InsideDTO } from '../models/dtos/InsideDTO'
import { VerifyProps } from './middleware/VerifyProps'
import { columnsProperties } from '../models/entities/Inside'

export class InsidesRouter extends BaseRouter {
  private InsidesMannager: InsidesMannager
  constructor() {
    super()
    this.InsidesMannager = new InsidesMannager()
    this.buildRoutes()
  }

  private async createInside(req: express.Request, res: express.Response) {
    const Inside = new InsideDTO(req.body)
    const response = await this.InsidesMannager.createInside(Inside)
    res.status(200).json(response)
  }

  private async getInside(req: express.Request, res: express.Response) {
    const response = await this.InsidesMannager.getAllInside()
    res.status(200).json(response)
  }

  private async updateInside(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.InsidesMannager.updateInside(+id, req.body)
    res.status(200).json(response)
  }

  private async getInsideById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.InsidesMannager.getInsideById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      VerifyProps.checkProps(Object.keys(columnsProperties)),
      this.createInside.bind(this)
    )
    this.router.put(
      PARAM_PATH_ID,
      VerifyProps.checkIdIsANumber,
      this.updateInside.bind(this)
    )
    this.router.get(PATH_INICIAL, this.getInside.bind(this))
    this.router.get(
      PARAM_PATH_ID,
      VerifyProps.checkIdIsANumber,
      this.getInsideById.bind(this)
    )
  }
}
