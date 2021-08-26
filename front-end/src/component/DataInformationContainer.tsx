import React, { useCallback } from 'react'
import { AppBar, Container } from '@material-ui/core'
import TabIndex from './TabIndex'
import TabsPanels from './TabsPanels'
import useCarDetail from '../hook/useCarDetail'

const DataInformationContainer = (): JSX.Element => {
  const { keyCarDetail, tab, setTab } = useCarDetail()

  const handleChange = useCallback(
    (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
      setTab(newValue)
    },
    [setTab]
  )

  const handleChangeIndex = useCallback(
    (index: number) => {
      setTab(index)
    },
    [setTab]
  )
  return (
    <Container>
      <AppBar
        position="static"
        color="default"

      >
        <TabIndex
          keyForTabs={keyCarDetail}
          value={tab}
          handleChange={handleChange}
        />
        <TabsPanels
          keyForTabs={keyCarDetail}
          value={tab}
          handleChangeIndex={handleChangeIndex}
        />
      </AppBar>
    </Container>
  )
}

export default DataInformationContainer
