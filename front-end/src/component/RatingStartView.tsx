import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { RatingStartViewProps } from '../interface/interface'

const RatingStartView = ({
  value,
  onClick,
  name,
}: RatingStartViewProps): JSX.Element => {
  const [starts, setStarts] = React.useState<number>(value)

  return (
    <Rating
      ratingValue={starts}
      fillColor="yellow"
      onClick={(index): void => {
        onClick(index, name)
        setStarts(index)
      }}
    />
  )
}

export default RatingStartView
