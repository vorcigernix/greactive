import React from "react"
import PageIntro from '../components/page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqItem from '../components/faq-item'
import {FAQ} from '../consts/faq'

export default class FaqPage extends React.Component {
	render () {
		return (
			<Layout>
				<SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

				{PageIntro('FAQ')}

				<div className='faq'>
					{FAQ.map((i) => {
						return (
							<FaqItem key={i.question} question={i.question} answer={i.answer} link={i.link} />
						)
					})}
				</div>
			</Layout>
		)
	}
}
