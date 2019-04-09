import React from "react"

export default class AgendaItem extends React.Component {
	render () {
		const {time, activity, icon} = this.props;

		return (
			<div className='agenda-item'>
				<div className='agenda-item-time basic-text'>{time}</div>
				{icon}
				<div className='agenda-item-activity basic-text'>{activity}</div>
            </div>
		)
	}
}
