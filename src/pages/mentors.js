import React from "react"

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"

const MentorsPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {SubPageIntro('Mentors')}
    <div className='mentors-page container'>
      <div className='mentorsWrapper'>
        <div className='mentor'>
          <div className='mentor-imgWrapper'><img className='mentor-img' src="https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large" alt="mentor" /></div>
          <a className='mentor-name' href="https://jan.vlnas.cz/">Jan Vlnas</a>
          <div className='mentor-description'>Experienced hackathon masterblaster</div>
        </div>
        <div className='mentor'>
          <div className='mentor-imgWrapper'><img className='mentor-img' src="https://avatars2.githubusercontent.com/u/8451755?s=460&v=4" alt="mentor" /></div>
          <a className='mentor-name' href="https://github.com/kokes">Ondrej Kokes</a>
          <div className='mentor-description'>Ideation & Pitch Preparation</div>
        </div>
      </div>
      <div className='mentorsWrapper'>
        <div className='mentor mentor--inverse'>
          <div className='mentor-imgWrapper'><img className='mentor-img' src="https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large" alt="mentor" /></div>
          <a className='mentor-name' href="https://jan.vlnas.cz/">Jan Vlnas</a>
          <div className='mentor-description'>Experienced hackathon masterblaster</div>
        </div>
        <div className='mentor mentor--inverse'>
          <div className='mentor-imgWrapper'><img className='mentor-img' src="https://avatars2.githubusercontent.com/u/8451755?s=460&v=4" alt="mentor" /></div>
          <a className='mentor-name' href="https://github.com/kokes">Ondrej Kokes</a>
          <div className='mentor-description'>Ideation & Pitch Preparation</div>
        </div>
        <div className='mentor mentor--inverse'>
          <div className='mentor-imgWrapper'><img className='mentor-img' src="https://d2cmuesa4snpwn.cloudfront.net/public/427478639/large" alt="mentor" /></div>
          <a className='mentor-name' href="https://jan.vlnas.cz/">Jan Vlnas</a>
          <div className='mentor-description'>Experienced hackathon masterblaster</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default MentorsPage
