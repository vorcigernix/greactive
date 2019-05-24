import React from "react"

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mentor from "../components/mentor"

const MentorsPage = ({ data }) => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {SubPageIntro('Mentors')}
    <div className='mentors-page container'>
      <div className='mentorsWrapper'>
        <Mentor
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={data.vlnas.childImageSharp.fixed}
          description={'Experienced hackathon masterblaster'}
        />
        <Mentor
          link={'https://jan.vlnas.cz/'}
          name={'Jan Vlnas'}
          img={data.vlnas.childImageSharp.fixed}
          description={'Experienced hackathon masterblaster'}
        />
      </div>
      <div className='mentorsWrapper'>
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fixed}
          description={'Ideation & Pitch Preparation'}
          inverse />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fixed}
          description={'Ideation & Pitch Preparation'}
          inverse />
        <Mentor
          link={'https://github.com/kokes'}
          name={'Ondrej Kokes'}
          img={data.kokes.childImageSharp.fixed}
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
        fixed(width: 304, height: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vlnas: file(relativePath: { eq: "vlnas.jpg"}) {
      childImageSharp {
        fixed(width: 304, height: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`