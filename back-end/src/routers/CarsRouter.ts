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
import { NotFoundError } from '../errors/NotFoundError'
import { carsSeeds } from '../seeds/carsSeeds'

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
    this.seed()
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
    const children = await this.getChildrensTable(+id)
    res.status(200).json({
      ...children,
    })
  }

  private async getChildrensTable(car_id: number) {
    const request = await Promise.allSettled([
      this.DocumentsMannager.getDocumentCar_id(car_id),
      this.BodyworksMannager.getBodyworkCar_id(car_id),
      this.InsidesMannager.getInsideById(car_id),
      this.MotorsMannager.getMotorById(car_id),
      this.WheelsMannager.getWheelsCar_id(car_id),
      this.CarsMannager.getCarById(car_id),
    ])
    if (request[0]['status'] === 'rejected')
      throw new NotFoundError(request[0].reason.message)

    const car = request[5]['value']
    const image = car.image
    delete car.image
    return {
      car,
      documentacion_y_mantenimiento: request[0]['value'],
      carroceria: request[1]['value'],
      interior_general: request[2]['value'],
      motor: request[3]['value'],
      ruedas__frenos__suspension_y_direccion: request[4]['value'],
      image,
    }
  }

  private async generateChildrenTable(car_id: number) {
    const request = await Promise.allSettled([
      this.DocumentsMannager.createDocument({ car_id }),
      this.BodyworksMannager.createBodywork({ car_id }),
      this.InsidesMannager.createInside({
        car_id,
      }),
      this.MotorsMannager.createMotor({ car_id }),
      this.WheelsMannager.createWheels({ car_id }),
    ])
    return {
      documentacion_y_mantenimiento: request[0]['value'],
      carroceria: request[1]['value'],
      interior_general: request[2]['value'],
      motor: request[3]['value'],
      ruedas__frenos__suspension_y_direccion: request[4]['value'],
    }
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      checkProps(Object.keys(columnsProperties)),
      this.createCar.bind(this)
    )
    this.router.put(PARAM_PATH_ID, checkIdIsANumber, this.updateCar.bind(this))
    this.router.get(PARAM_PATH_ID, checkIdIsANumber, this.getCarById.bind(this))
    this.router.get(PATH_INICIAL, this.getCars.bind(this))
  }

  private async seed(): Promise<void> {
    const existCars = await this.CarsMannager.getCarById(1)
    if (existCars) {
      console.log('not need seed')
      return
    }
    console.log('trying seeders the seed')
    await Promise.allSettled(
      carsSeeds.map(async (car) => {
        this.CarsMannager.createCar(car)
      })
    )
    console.log('Seeds created')
  }
}
