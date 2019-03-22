import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AgendaPage = () => (
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
    <h2>Friday</h2>
    <h3>Opening Ceremony</h3>
    <p>3:00pm - 3:45pm</p>
    <h3>Ideation &amp; Pitch Preparation</h3>
    <p>3:45pm - 4:30pm</p>
    <h3>Bar Camps</h3>
    <p>4:30pm - 6:30pm</p>
    <h3>Dinner</h3>
    <p>6:30pm - 7:30pm</p>
    <h3>Interest meetings</h3>
    <p>7:30pm - 8:30pm</p>
    <h3>Get-together &amp; activities</h3>
    <p>8:30pm - 12:00pm</p>
    <h2>Sunday</h2>
    <h3>Breakfast</h3>
    <p>9:00am - 10:00am</p>
    <h3>Workshops</h3>
    <p>10:00am - 12:00am</p>
    <h3>Lunch</h3>
    <p>12:00pm - 12:55pm</p>
    <h3>Start of Hackathon</h3>
    <p>12:55pm - 1:00pm</p>
    <h3>Hacking begins</h3>
    <p>1:00pm</p>
    <h3>Dinners</h3>
    <p>6:30pm - 7:30pm</p>
    <h2>Sunday</h2>
    <h3>Midnight Snack</h3>
    <p>0:00am</p>
    <h3>Halftime Challenge</h3>
    <p>01:00am - 01:30am</p>
    <h3>Breakfast</h3>
    <p>9:00am - 10:00am</p>
    <h3>Morning Announcements</h3>
    <p>10:00pm - 10:15pm</p>
    <h3>Submit projects</h3>
    <p>12:30pm - 1:00pm</p>
    <h3>Deadline</h3>
    <p>1:00pm</p>
    <h3>Lunch</h3>
    <p>1:00pm - 1:45pm</p>
    <h3>Preparation</h3>
    <p>1:45pm - 2:15pm</p>
    <h3>Expo</h3>
    <p>2:15pm - 3:00pm</p>
    <h3>Winning Ceremony + Wrapping up</h3>
    <p>3:15pm - 3:45pm</p>
    <h3>Chill-Out</h3>
    <p>3:45pm - 4:30pm</p>

  </Layout>
)

export default AgendaPage
