import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { GeneralsMannager } from '../mannagers/GeneralsMannager'
import { GeneralDTO } from '../models/dtos/GeneralDTO'

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
    const general = await this.GeneralsMannager.getAllGenerals()
    res.status(200).json(general)
  }

  private async updateGeneral(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const general = await this.GeneralsMannager.updateGeneral(+id, req.body)
    res.status(200).json(general)
  }

  private async getGeneralById(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const general = await this.GeneralsMannager.getGeneralById(+id)
    res.status(200).json(general)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createGeneral.bind(this))
    this.router.put(PARAM_PATH_ID, this.updateGeneral.bind(this))
    this.router.get(PATH_INICIAL, this.getGenerals.bind(this))
    this.router.get(PARAM_PATH_ID, this.getGeneralById.bind(this))
  }
}
