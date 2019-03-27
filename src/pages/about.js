import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    <nav>
      <ul>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li><Link to="/mentors">Mentors</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>

    <h2>About</h2>
    <p>
    Battle for the Net is a first iteration of hackathons created by ReactiveConf. Our main goal is to create an event with a positive impact on our society. We believe that technology is a great tool to help other people and every year we’ll aim to raise awareness about problems we see around us then turn this awareness into action. And, yes, we want to have a lot of fun too! 
    </p>
    <p>
    This year, the event is being created in collaboration with Socialbakers, one of the most successful startups in the Czech Republic.
    </p>
    <h2>Venue</h2>
    <p>
    The hackathon takes place at the stylistically-acclaimed Socialbakers offices in Forum Karlin. With its spacious, industrial vibe, great connectivity and chill out areas, it’s the perfect venue for a hackathon event in Prague. 
    </p>
    <ul>
      <li>Socialbakers a.s. - Fórum Karlín Pernerova 53, Prague 8 - Karlín</li>
      <li>Two floors with capacity of 150 people</li>
      <li>Soundproof meeting rooms</li>
      <li>Table Tennis, PS4, Foosbal</li>
      <li>Open terrace with grill</li>
    </ul>
    <h2>Partnership</h2>
    <p>
      Hackathon is sponsored by <a href="https://socialbakers.com" >Socialbakers a.s. </a>
    </p>
    <p>
      <a href="mailto:hackathon@socialbakers.com">Become a partner</a>
    </p>
  </Layout>
)

export default AboutPage
