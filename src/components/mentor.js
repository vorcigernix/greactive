import React from "react"
import Img from "gatsby-image"
import classnames from 'classnames'

export default class Mentor extends React.Component {
	render () {
		return (
			<div className={classnames('mentor', {'mentor--inverse': this.props.inverse})}>
				<div className='mentor-imgWrapper'>
					<Img fluid={this.props.img} />
				</div>
				<a className='mentor-name' href={this.props.link}>{this.props.name}</a>
				<div className='mentor-description'>{this.props.description}</div>
			</div>
		)
	}
}
