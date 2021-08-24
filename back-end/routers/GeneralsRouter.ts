import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { GeneralsMannager } from '../mannagers/GeneralsMannager'
import { GeneralDTO } from '../models/dtos/GeneralDTO'
import { VerifyProps } from './middleware/VerifyProps'
import { columnsProperties } from '../models/entities/General'
export class GeneralsRouter extends BaseRouter {
  private GeneralsMannager: GeneralsMannager
  constructor() {
    super()
    this.GeneralsMannager = new GeneralsMannager()
    this.buildRoutes()
  }

  private async createGeneral(req: express.Request, res: express.Response) {
    const general = new GeneralDTO(req.body)
    const response = await this.GeneralsMannager.createGeneral(general)
    res.status(200).json(response)
  }

  private async getGenerals(req: express.Request, res: express.Response) {
    const response = await this.GeneralsMannager.getAllGenerals()
    res.status(200).json(response)
  }

  private async updateGeneral(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.GeneralsMannager.updateGeneral(+id, req.body)
    res.status(200).json(response)
  }

  private async getGeneralById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.GeneralsMannager.getGeneralById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      VerifyProps.checkProps(Object.keys(columnsProperties)),
      this.createGeneral.bind(this)
    )
    this.router.put(
      PARAM_PATH_ID,
      VerifyProps.checkIdIsANumber,
      this.updateGeneral.bind(this)
    )
    this.router.get(PATH_INICIAL, this.getGenerals.bind(this))
    this.router.get(
      PARAM_PATH_ID,
      VerifyProps.checkIdIsANumber,
      this.getGeneralById.bind(this)
    )
  }
}
