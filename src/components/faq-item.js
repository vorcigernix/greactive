import React from "react"
import classnames from 'classnames'

import Icon from '../components/icon'
import faqArrow from '../images/faq-arrow.svg'

export default class FaqItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}

	handleItemClick () {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render () {
		const {question, answer, link} = this.props;

		return (
			<div className={classnames('faq-item', {'isOpen': this.state.isOpen})} onClick={this.handleItemClick.bind(this)}>
				<div className='faq-question'>
					{question}
					<Icon src={faqArrow} className={classnames('faq-arrow', {'open': this.state.isOpen})}/>
				</div>
				<div className='faq-answer basic-text'>{answer}{link && <a className='faq-link' href={`mailto:${link}`}>{link}</a>}</div>
			</div>
		)
	}
}
