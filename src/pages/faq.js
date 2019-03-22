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

<h2>Do I need an level of experience?</h2>
<p>
Yes. You should be able to write a code somewhere beyond "hello world" in a language of your choosing. If you are a designer or marketer, we expect some degree of experience in your area.
</p>
<h2>How long is the hackathon?</h2>
<p>
The hackathon starts on the May 10th at 10am and goes until May 10th, 4:30pm. We expect you to attend the whole hackathon.
</p>
<h2>On which topic do you focus?</h2>
<p>
We will be building a website. Your aim would be to make a perfect website for purpose we will share on the beginning. Be prepared for advanced issues like a payment solution, SEO optimization, social network sharing and so on.
</p>
<h2>How can I prepare?</h2>
<p>
Get some idea on modern web technologies. We recommend reading articles from companies like Netflix, Google and Facebook about current status of technology.
</p>
<h2>Who are the judges for the hackathon?</h2>
<p>
The Mentors and the market. We don't want to share a methodology for assessment in advance, but real application of the site would make a big difference.
</p>
<h2>What is the event language?</h2>
<p>
We expect you to speak English at the hackathon to include everyone and enable everyone communicate with each other. Within the team, you can communicate in whatever language you prefer.
</p>
<h2>Can we apply as a team?</h2>
<p>
No, each of your team members has to apply individually. You can assemble a team if you all pass the selection.
</p>
<h2>Anything else?</h2>
<p>
Feel free to contact us via mail: <a href="mailto:hackathon@socialbakers.com">hackathon@socialbakers.com</a>
</p>
  </Layout>
)

export default FaqPage
