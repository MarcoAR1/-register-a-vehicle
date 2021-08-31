import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gap: '1rem 2rem',
    gridTemplateColumns: 'repeat(2, minmax(10rem, 1fr))',
    gridAutoRows: 'minmax(3rem, 1fr)',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    borderBottom: '1px solid #eaeaea',
  },
  rowText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rowStar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgb(174, 0, 255)',
  },

  '@media (max-width: 768px)': {
    container: {
      gridTemplateColumns: 'repeat(1, minmax(10rem, 1fr))',
    },
    row: {
      textAlign: 'center',
    },
  },
}))

export default useStyles
