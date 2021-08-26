import { Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { fixedKeyName } from '../utils/fixedKeyName'
const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const TabIndex = ({
  keyForTabs,
  value,
  handleChange,
}: {
  keyForTabs: string[]
  value: number
  handleChange: (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => void
}): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: 'orange',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="full width tabs example"
      >
        {keyForTabs.map((key, index) => {
          return (
            <Tab
              key={key}
              label={fixedKeyName(key)}
              icon={
                <img
                  style={{
                    width: '25px',
                    height: '25px',
                  }}
                  src={`/${key}.svg`}
                  alt={fixedKeyName(key)}
                />
              }
              {...a11yProps(index)}
            />
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabIndex
