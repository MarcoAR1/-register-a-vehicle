import Document from '../models/entities/Document'
import { DocumentDTO } from 'models/dtos/DocumentDTO'

export class DocumentsMannager {
  querys: Document
  constructor() {
    this.querys = new Document()
  }

  async createDocument(document: DocumentDTO): Promise<DocumentDTO> {
    return this.querys.create(document)
  }

  async getAllDocuments(): Promise<DocumentDTO[]> {
    return this.querys.getAll()
  }

  async getDocumentById(id: number): Promise<DocumentDTO> {
    return this.querys.getById(id)
  }
  async getDocumentCar_id(car_id: number): Promise<DocumentDTO> {
    return this.querys.getByCar_id(car_id)
  }

  async updateDocument(
    id: number,
    document: DocumentDTO
  ): Promise<DocumentDTO> {
    return this.querys.update(id, document)
  }
}
