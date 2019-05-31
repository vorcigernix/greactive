import React from "react"

import PageIntro from '../components/page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mentor from "../components/mentor"

const MentorsPage = ({ data }) => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {PageIntro('Mentors')}
    <div className='mentors-page container'>
      <div className='mentors-wrapper'>
        <Mentor
          name={'Alberto Silva'}
          img={data.alberto.childImageSharp.fluid}
          description={'In these years working as developers, I have understood that there is no silver bullet when talking about tools or technologies. If you know me, you are gonna here: Javascript is my amazing thing; Agile manifesto should be remembered every day while working; Let\'s write tests please; Don\'t write to much code under frameworks; Learn techniques before tools.'}
        />
        <Mentor
          name={'Johny Velho'}
          img={data.johny.childImageSharp.fluid}
          description={'Experienced hackathon masterblaster'}
        />
        <Mentor
          name={'Jan Čermák'}
          img={data.honza.childImageSharp.fluid}
          description={'Ideation & Pitch Preparation'}
        />
      </div>
      {/* <div className='mentors-wrapper'>
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fluid}
          description={'Ideation & Pitch Preparation'}
          inverse />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fluid}
          description={'Ideation & Pitch Preparation'}
          inverse />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fluid}
          description={'Ideation & Pitch Preparation'}
          inverse />
      </div> */}
    </div>
  </Layout>
)

export default MentorsPage

export const query = graphql`
  query {
    alberto: file(relativePath: { eq: "alberto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 304, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    johny: file(relativePath: { eq: "johny.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 304, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    honza: file(relativePath: { eq: "honza.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 304, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`