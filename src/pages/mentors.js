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
        Jan Vlnas
        Jan is experienced hackathon masterblaster.
      </li>
      <li>
        Ondrej Kokes
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
