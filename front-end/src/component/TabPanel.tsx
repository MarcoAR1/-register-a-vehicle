import { Box } from '@material-ui/core'
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps): JSX.Element => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box minHeight="500px" p={5}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default TabPanel
