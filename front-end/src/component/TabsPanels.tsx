import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import TabPanel from './TabPanel'
import PanelDetailCard from './PanelDetailCard'

interface TabPanelProps {
  keyForTabs: string[]
  value: number
  handleChangeIndex: (index: number) => void
}

const TabsPanels = ({
  keyForTabs,
  value,
  handleChangeIndex,
}: TabPanelProps): JSX.Element => {
  return (
    <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
      {keyForTabs.map((key, index) => {
        return (
          <TabPanel key={key} value={value} index={index}>
            <PanelDetailCard index={key} />
          </TabPanel>
        )
      })}
    </SwipeableViews>
  )
}

export default TabsPanels
