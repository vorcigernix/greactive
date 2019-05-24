import React from "react"
import Icon from './icon'

export default class AgendaItem extends React.Component {
	render () {
		const {time, activity, icon} = this.props;

		return (
			<div className='agenda-item'>
				<div className='agenda-item-time basic-text'>{time}</div>
				<div className='agenda-item-icon-wrapper'><Icon src={icon} className='agenda-item-icon' /></div>
				<div className='agenda-item-activity basic-text'>{activity}</div>
            </div>
		)
	}
}
