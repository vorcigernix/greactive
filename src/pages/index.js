import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mentor from "../components/mentor"

const IndexPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    <div className='hp-intro'>
      <h1 className='hp-intro-title'>
        Push the button!
        <div className='hp-intro-subtitle'>First public hackathon by ReactiveConf and Socialbakers</div>
      </h1>
      <div className='hp-intro-footer'>
        <div className='hp-intro-date'>13 — 15 September 2019</div>
        <div className='hp-intro-link'>Pre-register</div>
        <div className='hp-intro-place'>Prague, Socialbakers offices</div>
      </div>
    </div>
    <Tabs
      defaultTab="challenge"
      className='hp-tabs container'>
      <TabList className='hp-tabs-btns'>
        <Tab className='hp-tabs-btn' tabFor="challenge">Challenge</Tab>
        <Tab className='hp-tabs-btn' tabFor="rules">Competition rules</Tab>
        <Tab className='hp-tabs-btn' tabFor="prize">Prize</Tab>
        <Tab className='hp-tabs-btn' tabFor="participants">Participants</Tab>
      </TabList>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="challenge">Challenge</Tab>
      <TabPanel tabId="challenge" className='hp-tabs-box'>
        <h3 className='hp-tabs-box-title'>Challenge</h3>
        <p className='basic-text hp-tabs-box-text'>
          On our first collaboration with ReactiveConf, we decided to spend our effort on helping others.
        </p>
        <p className='basic-text hp-tabs-box-text'>
          We will collaborate with NGOs to solve their problems creative way. Selling newspapers via smartphone application, learning sign language from computer, managing volunteer workforce - these are challenges waiting for your skills.
        </p>
        <p className='basic-text hp-tabs-box-text'>
          If you want to prepare, take a look at transaction processing, GPS functionality, ML videoprocessing and similar areas. We prefer use of Reactive concepts, would that be React Native, Flutter or PWA is up to you and your team.
        </p>
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="rules">Competition rules</Tab>
      <TabPanel tabId="rules" className='hp-tabs-box'>
        <h3 className='hp-tabs-box-title'>Rules</h3>
        <p className='basic-text hp-tabs-box-text'>
          Our Mentor will add a personal opinion based on
          subjective criteria like graphical design, which will account for
          30% of points. These subjective points will be judged from a 15
          minute pitch of every team at the end of the event. Other 70 percents
          will be based on peer voting - you will have a three votes as a team you can spend on any competing team except yours.
        </p>
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="prize">Prize</Tab>
      <TabPanel tabId="prize" className='hp-tabs-box'>
        <h3 className='hp-tabs-box-title'>Prize</h3>
        <p className='basic-text hp-tabs-box-text'>
          We’ll be blunt here. If you are in for a money, you are in a wrong
          place. We are doing this for fun and we want to return the original
          meaning to the Hackathon events. This is not an easy way to make a money
          for skilled developers and we are not doing hire-a-thon. That being
          said, there will be prize that can change a life. Maybe not yours though.
        </p>
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="participants">Participants</Tab>
      <TabPanel tabId="participants" className='hp-tabs-box'>
        <h3 className='hp-tabs-box-title'>Participants</h3>
        <p className='basic-text hp-tabs-box-text'>
          You are very motivated and skilled developer or designer. You will be working together in a multidisciplinary team
          delivering the whole thing on the market. While our mentors work usually
          in javascript, typescript, python and Sketch, we don’t want to limit
          your tools to anything specific. 
        </p>
      </TabPanel>
    </Tabs>
    <div className='mentors container'>
      <div className='mentors-wrapper'>
        <Mentor
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={'https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large'}
          description={'Experienced hackathon masterblaster'}
        />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={'https://avatars2.githubusercontent.com/u/8451755?s=460&v=4'}
          description={'Ideation & Pitch Preparation'} />
      </div>
      <div className='mentors-info'>
        <h2 className='mentors-info-title section-title'>Mentors</h2>
        <p className='mentors-info-text basic-text'>
          These people will bootstrap your development and help you to avoid common traps in website development.
        </p>
        <Link className='mentors-info-link' to={'/mentors'}>Meet our team</Link>
      </div>
    </div>
    <div className='appProcess'>
      <h2 className='appProcess-title'>Application process:</h2>
      <div className='appProcess-steps'>
        <div className='appProcess-item appProcess-item--apply'>
          <h3 className='appProcess-item-title'>Apply in the form</h3>
          <p className='appProcess-item-text basic-text'>We need to balance team abilities, be honest about your capabilities please. Applications will be closed 20th April.</p>
        </div>
        <div className='appProcess-item appProcess-item--process'>
          <h3 className='appProcess-item-title'>Review process</h3>
          <p className='appProcess-item-text basic-text'>We will review your application with help of mentors. We will come back to you in a week with results of a review.</p>
        </div>
        <div className='appProcess-item appProcess-item--ticket'>
          <h3 className='appProcess-item-title'>Ticket</h3>
          <p className='appProcess-item-text basic-text'>If your review is positive, you will get a link to ticket. You need to confirm it within a 7 days limit. Capacity of a venue is limited, please consider seriously your ability to be there with us.</p>
        </div>
      </div>
      <a className='appProcess-link' href='#'>Pre-register</a>
    </div>
    <div className='venue container'>
      <div className='venue-info'>
        <h2 className='section-title'>Venue</h2>
        <p className='venue-text basic-text'>
          Hackathon will take place in acclaimed Socialbakers offices in Forum Karlin.
          With a lot of space, great connectivity and chill out areas, it is one of best places we can have in Prague.
        </p>
        <svg className='venue-map-icon' width="56" height="54" xmlns="http://www.w3.org/2000/svg"><g stroke="#FAA" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round"><path d="M15 23.502H5l-3.655 29h52.769l-3.114-29H41" /><path d="M38.788 10.673c-.525-3.999-2.615-9.181-10.822-9.181-8.208 0-10.298 5.182-10.822 9.181-.288 2.192-.127 4.419.33 6.583 2.508 11.892 8.709 19.022 10.177 20.576a.43.43 0 0 0 .63 0c1.467-1.554 7.668-8.684 10.177-20.576.456-2.164.617-4.391.33-6.583z" /><path d="M34.311 12.068a6.346 6.346 0 1 1-6.345-6.346 6.346 6.346 0 0 1 6.345 6.346z" /><path d="M42.795 28.441c1.165-.328 2.471-.249 3.514.367 1.043.615 1.767 1.801 1.685 3.009-.064.939-.576 1.784-1.113 2.557-.392.563-.814 1.121-1.375 1.516-.834.587-1.886.753-2.9.856-2.667.272-5.358.218-8.026.48s-5.368.868-7.617 2.327c-1.045.677-1.968 1.522-2.937 2.304a28.852 28.852 0 0 1-9.627 5.137c-1.108.34-2.268.613-3.418.469-1.15-.143-2.297-.775-2.782-1.827-.258-.561-.313-1.195-.283-1.812.107-2.196 1.587-4.498 3.773-4.739.629-.069 1.323.062 1.749.529" strokeDasharray="3" /></g></svg>
        <div className='venue-adress'>
          <div className='venue-sbks-title'>Socialbakers a.s. - Fórum Karlín</div>
          Pernerova 53, Prague 8 - Karlín
        </div>
        <Link className='venue-link' to='/about'>About</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage