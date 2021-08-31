import Modal from '@material-ui/core/Modal'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import useStyles, { getModalStyle } from '../style/ModalStyls'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { IModalProps, IModelRef } from '../interface/interface'

const ModalComponent = React.forwardRef<IModelRef, IModalProps>(
  (
    {
      Title = 'Modal',
      LabelButton = 'open',
      condicional,
      children,
    }: IModalProps,
    ref
  ): JSX.Element => {
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const handleOpen = (): void => {
      setOpen(true)
    }

    const handleClose = (): void => {
      setOpen(false)
    }

    useImperativeHandle(ref, () => ({ handleOpen, handleClose }))

    useEffect(() => {
      if (condicional) {
        handleOpen()
      }
    }, [condicional])

    return (
      <>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          {LabelButton}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="cars"
          aria-describedby="view list cars"
        >
          <div style={modalStyle} className={classes.paper}>
            <Typography variant="h6" color="initial">
              {Title}
            </Typography>
            {children}
          </div>
        </Modal>
      </>
    )
  }
)

ModalComponent.displayName = 'ModalComponent'

export default ModalComponent
