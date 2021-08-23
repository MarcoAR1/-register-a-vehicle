import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { DocumentsMannager } from '../mannagers/DocumentsMannager'
import { DocumentDTO } from '../models/dtos/DocumentDTO'

export class DocumentsRouter extends BaseRouter {
  private DocumentsMannager: DocumentsMannager
  constructor() {
    super()
    this.DocumentsMannager = new DocumentsMannager()
    this.buildRoutes()
  }

  private async createDocument(req: express.Request, res: express.Response) {
    const document = new DocumentDTO(req.body)
    const response = await this.DocumentsMannager.createDocument(document)

    res.status(200).json(response)
  }

  private async getDocuments(req: express.Request, res: express.Response) {
    const response = await this.DocumentsMannager.getAllDocuments()
    res.status(200).json(response)
  }

  private async updateDocument(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.DocumentsMannager.updateDocument(+id, req.body)
    res.status(200).json(response)
  }

  private async getDocumentById(req: express.Request, res: express.Response) {
    const { id } = req.params
    if (isNaN(+id)) {
      return res.status(400).json({
        message: 'El id debe ser un numero',
      })
    }
    const response = await this.DocumentsMannager.getDocumentById(+id)
    res.status(200).json(response)
  }

  private buildRoutes() {
    this.router.post(PATH_INICIAL, this.createDocument.bind(this))
    this.router.put(PARAM_PATH_ID, this.updateDocument.bind(this))
    this.router.get(PATH_INICIAL, this.getDocuments.bind(this))
    this.router.get(PARAM_PATH_ID, this.getDocumentById.bind(this))
  }
}
