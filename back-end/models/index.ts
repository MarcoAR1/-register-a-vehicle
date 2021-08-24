import { BaseModel } from './entities/BaseModel'
import { Bodywork } from './entities/Bodywork'
import { Car } from './entities/Car'
import { Document } from './entities/Document'
import { General } from './entities/General'
import { Wheels } from './entities/Wheels'

export default class Models {
  public static async initModels(): Promise<void> {
    const models = this.getModels()
    for (const model of models) {
      await model.initModel()
    }
  }

  private static getModels(): typeof BaseModel[] {
    return [Car, General, Document, Wheels, Bodywork]
  }
}
