import React from "react"
import Img from 'gatsby-image'

import PageIntro from '../components/page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from '../components/icon'

import floorsIcon from '../images/floors.svg'
import soundproofIcon from '../images/soundproof.svg'
import gamesIcon from '../images/games.svg'
import grillIcon from '../images/grill.svg'
import venueImgDesignIcon from '../images/about-venue-img-design.svg'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />
    
    {PageIntro('About')}
    <div className='container'>
      <p className='basic-text about-intro'>
      Refactor the World is a first iteration of hackathons created by ReactiveConf. Our main goal is to make an event with a positive impact on our society. We believe that technology is a great tool to help other people and every year we will aim to raise awareness about problems we see around us and turn this awareness into action. And, yes, we want to have a lot of fun too. This year, the event is created in collaboration with Socialbakers, one of most successful startups in Czech Republic.
      </p>
      <div className='about-venue container'>
        <div className='about-venue-img'>
          <Img fluid={data.venue.childImageSharp.fluid} />
        </div>
        <div className='about-venue-info-wrapper'>
          <div className='about-venue-info'>
            <h2 className='section-title'>Venue</h2>
            <p className='basic-text'>
              Hackathon will take place in acclaimed Socialbakers offices in Forum Karlin. With a lot of space, great connectivity and chill out areas, it is one of best places we can have in Prague.
            </p>
          </div>
          <Icon src={venueImgDesignIcon} className='about-venue-img-design' />
        </div>
        <div className='about-features'>
          <div className='about-feature'>
            <Icon src={floorsIcon} className='about-feature-icon' />
            Two floors with capacity of 150 people
          </div>
          <div className='about-feature'>
            <Icon src={soundproofIcon} className='about-feature-icon' />
            Soundproof meeting rooms
          </div>
          <div className='about-feature'>
            <Icon src={gamesIcon} className='about-feature-icon' />
            Table Tennis, PS4, Foosbal
          </div>
          <div className='about-feature'>
            <Icon src={grillIcon} className='about-feature-icon' />
            Open terrace with grill
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    venue: file(relativePath: { eq: "venue-about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`