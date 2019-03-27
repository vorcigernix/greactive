import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqPage = () => (
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

    <h2>Do I need a specific level of experience?</h2>
    <p>
      Yes. You should be able to write code somewhere beyond "hello world" in a language of your choosing. If you are a designer or marketer, we expect some degree of experience in your area.
</p>
    <h2>How long does the hackathon last?</h2>
    <p>
      The hackathon starts on May 10th at 10am and continues until May 10th, 4:30pm. If we invite you, we expect you to attend the whole hackathon.
</p>
    <h2>What’s the focus topic?</h2>
    <p>
    We’ll be building websites. Your aim is to make the best fit-for-purpose website you can, and we’ll share more details on the industry we’re focussing on at the beginning of the hackathon. Be prepared to think about advanced components like payment solutions, SEO optimization, social network sharing and so on.
    </p>
    <h2>How can I prepare?</h2>
    <p>
    Get some idea of modern web technologies. We recommend reading articles from companies like Netflix, Google and Facebook about the current status of technology.
    </p>
    <h2>Who’s judging the hackathon?</h2>
    <p>
    The Mentors and the market. We don't want to give too much away in advance about our assessment methodology in but successful real-world application of the site will make a big difference to your score.
    </p>
    <h2>Do you expect us to speak English at the hackathon?</h2>
    <p>
    Yes. We expect you to speak English at the hackathon. It’s the language we will use to ensure everyone is included in conversations and it’ll enable everyone to communicate with each other. Within your team, you can communicate in whichever language you prefer.
    </p>
    <h2>Can we apply as a team?</h2>
    <p>
    No, each of your team members has to apply individually. You can assemble a team afterwards if you all pass the selection process.
    </p>
    <h2>Anything else?</h2>
    <p>
      Feel free to contact us via mail: <a href="mailto:hackathon@socialbakers.com">hackathon@socialbakers.com</a>
    </p>
  </Layout>
)

export default FaqPage
