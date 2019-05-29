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
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={data.vlnas.childImageSharp.fluid}
          description={'Experienced hackathon masterblaster'}
        />
        <Mentor
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={data.vlnas.childImageSharp.fluid}
          description={'Experienced hackathon masterblaster'}
        />
      </div>
      <div className='mentors-wrapper'>
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
      </div>
    </div>
  </Layout>
)

export default MentorsPage

export const query = graphql`
  query {
    kokes: file(relativePath: { eq: "kokes.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 304, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vlnas: file(relativePath: { eq: "vlnas.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 304, maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`