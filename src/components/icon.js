import React from "react"

export default class Mentor extends React.Component {
    render () {
        return (
            <svg className={this.props.className}>
                <use xlinkHref={`#${this.props.src.id}`} />
            </svg>
        )
    }
}