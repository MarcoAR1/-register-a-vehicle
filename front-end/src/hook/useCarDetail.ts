import { useContext } from 'react'
import CarDetailContext from '../context/CarDetailContext'
import { IContextValueCarDetail } from '../interface/interface'

const useCarDetail = (): IContextValueCarDetail => useContext(CarDetailContext)

export default useCarDetail
