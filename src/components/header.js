import { Link } from "gatsby"
import React from "react"
import MobileMenu from './mobile-menu'
import classnames from 'classnames'
import Icon from '../components/icon'

import headerLogoIcon from '../images/header-logo.svg'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		}
	}

	handleHamburgerClick () {
		this.setState({
			menuOpen: !this.state.menuOpen,
		})
	}

	render () {
		return (
			<header className={classnames('header', {'fixed': this.state.menuOpen})}>
				<nav className='header-nav'>
					<Link className='header-nav-item' activeClassName="active" to="/about/">About</Link>
					<Link className='header-nav-item' activeClassName="active" to="/agenda">Agenda</Link>
					{/* <Link className='header-nav-item' activeClassName="active" to="/mentors">Mentors</Link> */}
					<Link className='header-nav-item' activeClassName="active" to="/faq">FAQ</Link>
				</nav>
				<Link to="/" className='header-logo'>
					<Icon src={headerLogoIcon} className='header-logo-icon' />
				</Link>
				<button id="eventbrite-widget-modal-trigger-62911838001" type="button" className='header-preorder'>Register</button>
				<div className={classnames('m-header-hamburger', {'isOpen': this.state.menuOpen})} onClick={this.handleHamburgerClick.bind(this)}>
					<div className='m-header-hamburger-inner' />
				</div>
				<MobileMenu open={this.state.menuOpen} />
			</header>
		)
	}
}
