import React from "react"

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />
    
    {SubPageIntro('About')}
    <div className='container'>
      <p className='basic-text about-intro'>
        Battle for the Net is a first iteration of hackathons created by ReactiveConf. Our main goal is to make an event with a positive impact on our society. We believe that technology is a great tool to help other people and every year we will aim to raise awareness about problems we see around us and turn this awareness into action. And, yes, we want to have a lot of fun too. This year, the event is created in collaboration with Socialbakers, one of most successful startups in Czech Republic.
      </p>
      <div className='venue'>
        <div className='venue-info'>
          <h2>Venue</h2>
          <p className='basic-text'>
            Hackathon will take place in acclaimed Socialbakers offices in Forum Karlin. With a lot of space, great connectivity and chill out areas, it is one of best places we can have in Prague.
          </p>
          <ul className='basic-text'>
            <li>Two floors with capacity of 150 people</li>
            <li>Soundproof meeting rooms</li>
            <li>Table Tennis, PS4, Foosbal</li>
            <li>Open terrace with grill</li>
          </ul>
        </div>
      </div>
      <div className='partnership'>
        <h2>Partnership</h2>
        <p className='basic-text'>
          Hackathon is sponsored by <a className='partnership-sbks' href="https://socialbakers.com" >Socialbakers a.s. </a>
        </p>
        <a className='partnership-link' href="mailto:hackathon@socialbakers.com">Become a partner</a>
      </div>
    </div>
  </Layout>
)

export default AboutPage
