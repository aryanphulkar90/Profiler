import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import WorkExperience from '../WorkExperience/WorkExperience'
import Education from '../Education/Education'
import Achievements from '../Achievements/Achievements'
function Tabbar() {
  return (
  <Tabs isFitted>
  <TabList>
    <Tab>Education</Tab>
    <Tab>WorkExperience</Tab>
    <Tab>Achievements</Tab>
  </TabList>

  <TabPanels>
    <TabPanel style={{padding:'0px'}}>
      <Education />
    </TabPanel>
    <TabPanel style={{padding:'0px'}}>
      <WorkExperience/>
    </TabPanel>
    <TabPanel style={{padding:'0px'}}>
      <Achievements/>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default Tabbar