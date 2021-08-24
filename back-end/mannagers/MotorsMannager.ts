import Motor from '../models/entities/Motor'
import { MotorDTO } from 'models/dtos/MotorDTO'

export class MotorsMannager {
  querys: Motor
  constructor() {
    this.querys = new Motor()
  }

  async createMotor(data: MotorDTO): Promise<MotorDTO> {
    return this.querys.create(data)
  }

  async getAllMotor(): Promise<MotorDTO[]> {
    return this.querys.getAll()
  }

  async getMotorById(id: number): Promise<MotorDTO> {
    return this.querys.getById(id)
  }

  async updateMotor(id: number, data: MotorDTO): Promise<MotorDTO> {
    return this.querys.update(id, data)
  }
}
