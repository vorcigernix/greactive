import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MentorsPage = () => (
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

    <h2>Mentors</h2>
    <ul>
      <li>
        Michal Brašna
        Michal is a front-end architect at Socialbakers, but his experience goes deeper and we bet he'll be able to answer to any question you might have.
      </li>
      <li>
        Martin Čižek
        Martin is a lead architect at Socialbakers. He would be go-to person for any question related to API related functionalities, microservices and systems architecture.
      </li>
      <li>
        Peter Popluhár
        Peter is skilled in styling related tasks, from basic CSS to styled components. Before you write "!important", it is important to ask him.
      </li>
      <li>
        Jan Čermák
        Jan is a designer. This is the reight person to ask about user experience and basic design considerations before you start coding. Right design can make a huge difference.
      </li>
    </ul>
    <h2>Team</h2>
    <ul>
    <li>Miki Vlckova</li>
    <li>Adam Sobotka</li>
    <li>Renata Vostra</li>
    </ul>
  </Layout>
)

export default MentorsPage
