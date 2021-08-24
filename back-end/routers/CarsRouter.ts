import { PARAM_PATH_ID, PATH_INICIAL } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { CarsMannager } from '../mannagers/CarsMannager'
import { checkIdIsANumber, checkProps } from './middleware/VerifyProps'
import { columnsProperties } from '../models/entities/Car'
import { DocumentsMannager } from '../mannagers/DocumentsMannager'
import { BodyworksMannager } from '../mannagers/BodyworksMannager'
import { InsidesMannager } from '../mannagers/InsidesMannager'
import { MotorsMannager } from '../mannagers/MotorsMannager'
import { WheelsMannager } from '../mannagers/WheelsMannager'

export class CarsRouter extends BaseRouter {
  private CarsMannager: CarsMannager
  private DocumentsMannager: DocumentsMannager
  private BodyworksMannager: BodyworksMannager
  private InsidesMannager: InsidesMannager
  private MotorsMannager: MotorsMannager
  private WheelsMannager: WheelsMannager

  constructor() {
    super()
    this.CarsMannager = new CarsMannager()
    this.DocumentsMannager = new DocumentsMannager()
    this.BodyworksMannager = new BodyworksMannager()
    this.InsidesMannager = new InsidesMannager()
    this.MotorsMannager = new MotorsMannager()
    this.WheelsMannager = new WheelsMannager()
    this.buildRoutes()
  }

  private async createCar(req: express.Request, res: express.Response) {
    const car = await this.CarsMannager.createCar(req.body)
    if (!car.id)
      return res.status(400).json({ error: 'Error al crear el auto' })

    const children = await this.generateChildrenTable(car.id)
    res.status(200).json({
      id: car.id,
      car,
      ...children,
    })
  }

  private async getCars(_: express.Request, res: express.Response) {
    const response = await this.CarsMannager.getAllCars()
    res.status(200).json(response)
  }

  private async updateCar(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.CarsMannager.updateCar(+id, req.body)
    res.status(200).json(response)
  }

  private async getCarById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const response = await this.CarsMannager.getCarById(+id)
    res.status(200).json(response)
  }

  private async generateChildrenTable(car_id: number) {
    const documentacion_y_mantenimiento =
      await this.DocumentsMannager.createDocument({ car_id })
    const carroceria = await this.BodyworksMannager.createBodywork({
      car_id,
    })
    const interior_general = await this.InsidesMannager.createInside({
      car_id,
    })
    const motor = await this.MotorsMannager.createMotor({ car_id })
    const ruedas__frenos__suspension_y_direccion =
      await this.WheelsMannager.createWheels({ car_id })

    return {
      documentacion_y_mantenimiento,
      carroceria,
      interior_general,
      motor,
      ruedas__frenos__suspension_y_direccion,
    }
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      checkProps(Object.keys(columnsProperties)),
      this.createCar.bind(this)
    )
    this.router.put(PARAM_PATH_ID, checkIdIsANumber, this.updateCar.bind(this))
    this.router.get(PATH_INICIAL, this.getCars.bind(this))
    this.router.get(PARAM_PATH_ID, checkIdIsANumber, this.getCarById.bind(this))
  }
}
