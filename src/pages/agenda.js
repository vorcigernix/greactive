import React from "react"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AgendaItem from '../components/agenda-item'
import {AGENDA} from '../consts/agenda'

const AgendaPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {SubPageIntro('Agenda')}
    <div className='agenda'>
      <Tabs defaultTab="friday">
        <TabList className='agenda-tabs desktop'>
          <Tab className='agenda-tab' tabFor="friday">Friday</Tab>
          <Tab className='agenda-tab' tabFor="saturday">Saturday</Tab>
          <Tab className='agenda-tab' tabFor="sunday">Sunday</Tab>
        </TabList>
        <TabList className='agenda-tabs mobile'>
          <Tab className='agenda-tab' tabFor="friday">Fri</Tab>
          <Tab className='agenda-tab' tabFor="saturday">Sat</Tab>
          <Tab className='agenda-tab' tabFor="sunday">Sun</Tab>
        </TabList>
        <TabPanel tabId="friday">
          <div className='agenda-day'>
						{AGENDA.friday.map((i) => {
							return (
								<AgendaItem key={i.time} time={i.time} activity={i.activity} icon={i.icon} />
							)
						})}
          </div>
        </TabPanel>
        <TabPanel tabId="saturday">
          <div className='agenda-day'>
						{AGENDA.saturday.map((i) => {
							return (
								<AgendaItem key={i.time} time={i.time} activity={i.activity} icon={i.icon} />
							)
						})}
          </div>
        </TabPanel>
        <TabPanel tabId="sunday">
          <div className='agenda-day'>
						{AGENDA.sunday.map((i) => {
							return (
								<AgendaItem key={i.time} time={i.time} activity={i.activity} icon={i.icon} />
							)
						})}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </Layout>
)

export default AgendaPage
