import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import React from 'react'
interface ICarItemListPros {
  isLast: boolean
  propety: string
  email: string
  carName: string
  image: string
  onClick?: () => void
}
const CarItemList = ({
  propety,
  email,
  carName,
  isLast = false,
  image,
  onClick,
}: ICarItemListPros): JSX.Element => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={onClick}
        style={{
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <ListItemAvatar>
          <Avatar alt={carName} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={carName}
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                {propety}
              </Typography>
              {` —  ${email}`}
            </>
          }
        />
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
    </>
  )
}

export default CarItemList
