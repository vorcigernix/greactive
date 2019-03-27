import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
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
    <h2>Challenge</h2>
    <p>
      During our first collaboration with ReactiveConf, we moved away slightly from advanced topics like Machine Learning and Enhanced Realities that we’d previously concentrated on.
    </p>
    <cite>
      This time your challenge is to create a perfect website for a non-governmental organization.
    </cite>
    <p>
      Building websites is an easy task. Until it isn't. If the website has needs more than just a blogging function, you’re suddenly looking at solutions which are expensive to develop. What we want to do at this hackathon is to help NGOs have a website of similar quality to what we have ourselves, here at Socialbakers.
    </p>
    <p>
      To prepare, take a look at some NGO websites and try to figure out their needs. They definitely benefit from easy page editing but they might use advanced features too, like donations, shop, SEO, SMO, mailing lists and so on.
    </p>
    <h2>Rules</h2>
    <p>
      We’ll measure the UX and technical parameters of your websites with commonly-used tools like Lighthouse. This part will make up 30% of your final score.
    </p>
    <p>
      Our Mentors will give their personal opinions based on subjective criteria like graphic design, which accounts for the next 30% of your total points. These subjective aspects will be judged during a 15 minute pitch that every team will make at the end of the event.
    </p>
    <p>
      The final 40% of your score will be calculated based upon the success of your webpage on the market. Further details will be given at the hackathon.
    </p>
    <h2>Prize</h2>
    <p>
      We’ll be blunt here. If you’re in it for the money, you’re in the wrong place. We’re doing this for fun and want to bring the original ethos back to the Hackathon events. This is not an easy way to make money for skilled developers and we’re not doing hire-a-thon. That being said, there will be a potentially life-changing prize on offer for somebody.
      </p>
    <h2>Participants</h2>
    <p>
      YYou’re a super-motivated and skilled developer, designer or marketing person. You’ll be working together within a multi-disciplinary team delivering the whole product to the market. While our mentors usually work with javascript, typescript, python and Sketch, we don’t want to limit your tools to anything specific in this battle. Fight with any weapon you have.
    </p>
    <h2>Mentors</h2>
    <p>
      These good folks will bootstrap your development and help you avoid common traps in website development.
    </p>

    <li><img src="https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large" alt="mentor" /><a href="https://jan.vlnas.cz/">Jan Vlnas</a></li>
    <li><img src="https://avatars2.githubusercontent.com/u/8451755?s=460&v=4" alt="mentor" /><a href="https://github.com/kokes">Ondrej Kokes</a></li>


    <h2>Application process:</h2>

    <ol>
      <li>
        Apply in the form: Applications close 20th April
      </li>
      <li>
        Review process: we’ll review your application with the help of the mentors and come back to you in a week with our decision
      </li>
      <li>
        Ticket: if you’re selected, you’ll receive a link to your ticket. You need to confirm it strictly within 7 days
      </li>
      <li>
        The capacity of the venue is limited and we need to blend and balance intra-team abilities - so please be totally honest about your capabilities
      </li>
    </ol>

    <h2>Venue</h2>
    <p>
      The hackathon takes place at the stylistically-acclaimed Socialbakers HQ in Forum Karlin. With its spacious, industrial vibe, great connectivity and chill out areas, it’s one of the most cutting-edge venues in Prague for a hackathon event.
    </p>
    <p>
      Socialbakers a.s. - Fórum Karlín
      Pernerova 53, Prague 8 - Karlín
    </p>
    <h2>Contact us</h2>
    <p>
      Do you have any questions? Do not hesitate to <a href="mailto:hackathon@socialbakers.com">contact our team</a>.
    </p>

    {/*     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
