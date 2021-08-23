import { BaseModel } from './entities/BaseModel'
import { Car } from './entities/Car'
import { General } from './entities/General'

export default class Models {
  public static async initModels(): Promise<void> {
    const models = this.getModels()
    for (const model of models) {
      await model.initModel()
    }
  }

  private static getModels(): typeof BaseModel[] {
    return [Car, General]
  }
}
