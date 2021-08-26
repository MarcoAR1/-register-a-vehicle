import React, { useCallback, useEffect, useState } from 'react'
import RatingStartView from './RatingStartView'
import { fixedKeyName } from '../utils/fixedKeyName'
import { Typography } from '@material-ui/core'
import useCarDetail from '../hook/useCarDetail'
import { updateDetailsCar } from '../service/updateDetailsCar'
import useStyles from '../stylemodule/PanelDetailCardStlye'
import { PanelDetailCardProps } from '../interface/interface'

const PanelDetailCard = ({ index }: PanelDetailCardProps): JSX.Element => {
  const [keyForInfoCard, setKeyForInfoCard] = useState<string[]>([])
  const { carDetail, setCarDetail } = useCarDetail()
  const classes = useStyles()

  const handlerEditDetails = useCallback(
    (value: number, name: string): void => {
      setCarDetail((prev) => {
        const copy = { ...prev }
        copy[index][name] = value.toString()
        return copy
      })
      updateDetailsCar(carDetail[index].id, index, carDetail[index])
    },
    [setCarDetail]
  )

  useEffect(() => {
    const keys = Object.keys(carDetail[index])
    setKeyForInfoCard(keys)
  }, [])

  return (
    <div className={classes.container}>
      {keyForInfoCard
        .filter((key) => !key.match(/(^id$)|(^image$)|(^car_id$)/))
        .map((name) => (
          <div key={name} className={classes.row}>
            <div className={classes.rowText}>
              <Typography>{fixedKeyName(name)}</Typography>
            </div>
            <div className={classes.rowStar}>
              {index === 'car' ? (
                <Typography>{carDetail[index][name]}</Typography>
              ) : (
                <RatingStartView
                  value={+carDetail[index][name]}
                  onClick={handlerEditDetails}
                  name={name}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default PanelDetailCard
