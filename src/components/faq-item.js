import React from "react"
import classnames from 'classnames'

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
					<svg className={classnames('faq-arrow', {'open': this.state.isOpen})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8l-1.4 1.4L9 3.8V16H7V3.8L1.4 9.4 0 8l8-8z"/></svg>
				</div>
				<div className='faq-answer basic-text'>{answer}{link && <a className='faq-link' href={`mailto:${link}`}>{link}</a>}</div>
			</div>
		)
	}
}
