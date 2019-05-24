import React from "react"
import { Link, graphql } from "gatsby"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mentor from "../components/mentor"
import Icon from '../components/icon'

import hpIntroTitleTopIcon from '../images/hp-intro-title-top.svg'
import hpIntroTitleBottomIcon from '../images/hp-intro-title-bottom.svg'
import hpTabsBoxLeft from '../images/tabs-box-left.svg'
import hpTabsBoxRight from '../images/tabs-box-right.svg'
import appProcessApplyIcon from '../images/appProcess-apply.svg'
import appProcessProcessIcon from '../images/appProcess-review.svg'
import appProcessTicketIcon from '../images/appProcess-ticket.svg'
import venueImgDesignIcon from '../images/venue-img-design.svg'
import venueMapIcon from '../images/venue-map.svg'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    <div className='hp-intro'>
      <h1 className='hp-intro-title'>
        <Icon src={hpIntroTitleTopIcon} className='hp-intro-title-top' />
        Push the button!
        <div className='hp-intro-subtitle'>First public hackathon by ReactiveConf and Socialbakers</div>
        <Icon src={hpIntroTitleBottomIcon} className='hp-intro-title-bottom' />
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
        <Icon src={hpTabsBoxLeft} className='hp-tabs-box-left' />
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
        <Icon src={hpTabsBoxRight} className='hp-tabs-box-right' />
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="rules">Competition rules</Tab>
      <TabPanel tabId="rules" className='hp-tabs-box'>
        <Icon src={hpTabsBoxLeft} className='hp-tabs-box-left' />
        <h3 className='hp-tabs-box-title'>Rules</h3>
        <p className='basic-text hp-tabs-box-text'>
          Our Mentor will add a personal opinion based on
          subjective criteria like graphical design, which will account for
          30% of points. These subjective points will be judged from a 15
          minute pitch of every team at the end of the event. Other 70 percents
          will be based on peer voting - you will have a three votes as a team you can spend on any competing team except yours.
        </p>
        <Icon src={hpTabsBoxRight} className='hp-tabs-box-right' />
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="prize">Prize</Tab>
      <TabPanel tabId="prize" className='hp-tabs-box'>
        <Icon src={hpTabsBoxLeft} className='hp-tabs-box-left' />
        <h3 className='hp-tabs-box-title'>Prize</h3>
        <p className='basic-text hp-tabs-box-text'>
          We’ll be blunt here. If you are in for a money, you are in a wrong
          place. We are doing this for fun and we want to return the original
          meaning to the Hackathon events. This is not an easy way to make a money
          for skilled developers and we are not doing hire-a-thon. That being
          said, there will be prize that can change a life. Maybe not yours though.
        </p>
        <Icon src={hpTabsBoxRight} className='hp-tabs-box-right' />
      </TabPanel>
      <Tab className='hp-tabs-btn hp-tabs-btn--single' tabFor="participants">Participants</Tab>
      <TabPanel tabId="participants" className='hp-tabs-box'>
        <Icon src={hpTabsBoxLeft} className='hp-tabs-box-left' />
        <h3 className='hp-tabs-box-title'>Participants</h3>
        <p className='basic-text hp-tabs-box-text'>
          You are very motivated and skilled developer or designer. You will be working together in a multidisciplinary team
          delivering the whole thing on the market. While our mentors work usually
          in javascript, typescript, python and Sketch, we don’t want to limit
          your tools to anything specific. 
        </p>
        <Icon src={hpTabsBoxRight} className='hp-tabs-box-right' />
      </TabPanel>
    </Tabs>
    <div className='mentors container'>
      <div className='mentors-wrapper'>
        <Mentor
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={data.vlnas.childImageSharp.fixed}
          description={'Experienced hackathon masterblaster'}
        />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fixed}
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
          <Icon src={appProcessApplyIcon} className='appProcess-item-background' />
          <h3 className='appProcess-item-title'>Apply in the form</h3>
          <p className='appProcess-item-text basic-text'>We need to balance team abilities, be honest about your capabilities please. Applications will be closed 20th April.</p>
        </div>
        <div className='appProcess-item appProcess-item--process'>
          <Icon src={appProcessProcessIcon} className='appProcess-item-background' />
          <h3 className='appProcess-item-title'>Review process</h3>
          <p className='appProcess-item-text basic-text'>We will review your application with help of mentors. We will come back to you in a week with results of a review.</p>
        </div>
        <div className='appProcess-item appProcess-item--ticket'>
          <Icon src={appProcessTicketIcon} className='appProcess-item-background' />
          <h3 className='appProcess-item-title'>Ticket</h3>
          <p className='appProcess-item-text basic-text'>If your review is positive, you will get a link to ticket. You need to confirm it within a 7 days limit. Capacity of a venue is limited, please consider seriously your ability to be there with us.</p>
        </div>
      </div>
      <a className='appProcess-link' href='#'>Pre-register</a>
    </div>
    <div className='venue container'>
      <div className='venue-img'>
        <Img fluid={data.venue.childImageSharp.fluid} />
        <Icon src={venueImgDesignIcon} className='venue-img-design' />
      </div>
      <div className='venue-info'>
        <h2 className='section-title'>Venue</h2>
        <p className='venue-text basic-text'>
          Hackathon will take place in acclaimed Socialbakers offices in Forum Karlin.
          With a lot of space, great connectivity and chill out areas, it is one of best places we can have in Prague.
        </p>
        <Icon src={venueMapIcon} className='venue-map-icon'/>
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

export const query = graphql`
  query {
    venue: file(relativePath: { eq: "venue.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kokes: file(relativePath: { eq: "kokes.jpg"}) {
      childImageSharp {
        fixed(width: 304, height: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vlnas: file(relativePath: { eq: "vlnas.jpg"}) {
      childImageSharp {
        fixed(width: 304, height: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`