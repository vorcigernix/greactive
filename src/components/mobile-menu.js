import { Link } from "gatsby"
import React from "react"
import classnames from 'classnames'

export default class MobileMenu extends React.Component {
	render () {
		return (
			<header className={classnames('mobile-menu', {'isOpen': this.props.open})}>
				<nav className='mobile-menu-nav'>
					<Link className='mobile-menu-nav-item' activeClassName="active" to="/about/">About</Link>
					<Link className='mobile-menu-nav-item' activeClassName="active" to="/agenda">Agenda</Link>
					{/* <Link className='mobile-menu-nav-item' activeClassName="active" to="/mentors">Mentors</Link> */}
					<Link className='mobile-menu-nav-item' activeClassName="active" to="/faq">FAQ</Link>
				</nav>
				<a className="mobile-menu-link" href="https://www.eventbrite.com/e/reactivehacks-tickets-62911838001">Pre-register</a>
				<div className="mobile-menu-text">13 — 15 Sept. 2019</div>
				<div className="mobile-menu-text">Prague, Socialbakers offices</div>
			</header>
		)
	}
}
