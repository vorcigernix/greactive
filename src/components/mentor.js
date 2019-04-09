import React from "react"

export default class Mentor extends React.Component {
	render () {
		return (
			<div className='mentor'>
				<div className='mentor-imgWrapper'><img className='mentor-img' src={this.props.img} alt="mentor" /></div>
				<a className='mentor-name' href={this.props.link}>{this.props.name}</a>
				<div className='mentor-description'>{this.props.description}</div>
			</div>
		)
	}
}
