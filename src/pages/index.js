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
      On our first collaboration with ReactiveConf, we made a digression
      from advanced topics like Machine Learning and Enhanced Realities we
      had before. Kind of. Your challenge would be to create a perfect
      website for a non-governmental organization.
        </p>
    <p>
      Building website is an easy task. Until it isn't. If you add a few
      more requirements than regular blogging, you are suddendly looking at
      solution which is expensive to develop. What we want to do on this
      hackaton is to help NGOs to have a website in similar quality we can
      afford for ourselves here at Socialbakers.
        </p>
    <p>
      If you want to prepare, take a look at some NGOs sites and try to
      figure out their needs. They will benefit from easy page editing for
      sure, but there might be even more advanced features like donations,
      shop, SEO, SMO, mailing lists and so on.
        </p>
    <h2>Rules</h2>
    <p>
      We will measure (with generally used tools) User Experience and
        technical parameters of a website. Think of Lighthouse. This will be 30%
        of a points you can get. Our Mentor will add a personal opinion based on
        subjective criteria like graphical design, which will account for
        another 30% of points. These subjective points will be judged from a 15
        minute pitch of every team at the end of the event. Other 40 percents
        will be measured from a success of the page on market. Again, details
        will be explained on the hackathon.
      </p>
    <h2>Prize</h2>
    <p>
      We’ll be blunt here. If you are in for a money, you are in a wrong
      place. We are doing this for fun and we want to return the original
      meaning to the Hackathon events. This is not an easy way to make a money
      for skilled developers and we are not doing hire-a-thon. That being
      said, there will be prize that can change a life. Maybe not yours though.
      </p>
    <h2>Participants</h2>
    <p>
      You are very motivated and skilled developer, designer or a marketing
      person. You will be working together in a multidisciplinary team
      delivering the whole thing on the market. While our mentors work usually
      in javascript, typescript, python and Sketch, we don’t want to limit
      your tools to anything specific. This is battle for a net, fight with
      anything you can use.
    </p>
    <h2>Mentors</h2>
    <p>
      These people will bootstrap your development and help you to avoid common traps in website development.
    </p>

    <li><img src="https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large" alt="mentor" /><a href="https://jan.vlnas.cz/">Jan Vlnas</a></li>
    <li><img src="https://avatars2.githubusercontent.com/u/8451755?s=460&v=4" alt="mentor" /><a href="https://github.com/kokes">Ondrej Kokes</a></li>


    <h2>Application process:</h2>

    <ol>
      <li>
        Apply in the form: We need to balance team abilities, be honest about
        your capabilities please. Applications will be closed 20th April.
      </li>
      <li>
        Review process: We will review your application with help of mentors. We
        will come back to you in a week with results of a review.
      </li>
      <li>
        Ticket: If your review is positive, you will get a link to ticket. You
        need to confirm it within a 7 days limit. Capacity of a venue is
        limited, please consider seriously your ability to be there with us.
      </li>
    </ol>

    <h2>Venue</h2>
    <p>
      Hackathon will take place in acclaimed Socialbakers offices in Forum Karlin.
      With a lot of space, great connectivity and chill out areas, it is one of best places we can have in Prague.
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
