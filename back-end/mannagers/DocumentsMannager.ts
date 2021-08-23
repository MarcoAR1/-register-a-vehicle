import { IDocument } from '../models/interface/IDocument'
import { Document } from '../models/entities/Document'
import { DocumentDTO } from 'models/dtos/DocumentDTO'

export class DocumentsMannager {
  querys: Document
  constructor() {
    this.querys = new Document()
  }

  async createDocument(document: IDocument): Promise<DocumentDTO> {
    return this.querys.create(document)
  }

  async getAllDocuments(): Promise<DocumentDTO[]> {
    return this.querys.getAll()
  }

  async getDocumentById(id: number): Promise<DocumentDTO> {
    return this.querys.getById(id)
  }

  async updateDocument(id: number, document: IDocument): Promise<DocumentDTO> {
    return this.querys.update(id, document)
  }
}
