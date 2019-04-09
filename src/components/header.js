import { Link } from "gatsby"
import React from "react"
import MobileMenu from './mobile-menu'
import classnames from 'classnames'

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
				<div className='wip'>Site under construction</div>
				<nav className='header-nav'>
					<Link className='header-nav-item' activeClassName="active" to="/about/">About</Link>
					<Link className='header-nav-item' activeClassName="active" to="/agenda">Agenda</Link>
					<Link className='header-nav-item' activeClassName="active" to="/mentors">Mentors</Link>
					<Link className='header-nav-item' activeClassName="active" to="/faq">FAQ</Link>
				</nav>
				<Link to="/" className='header-logo'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 24"><path fill="#FFF" d="M117.2 18.2h-4.1V11h-6.4v7.3h-4.1v-15L106 0h.7v7.1h6.4V0h4.1v18.2zm26.7-.9c-1 .8-2.3 1.3-3.9 1.3-3.7 0-6.6-2.7-6.6-6.5 0-3.9 2.9-6.6 6.5-6.6 1.8 0 3.1.6 4.1 1.4l-2.5 2.5c-.4-.3-.9-.5-1.6-.5-1.6 0-2.8 1.1-2.8 3.1s1.3 3.1 2.9 3.1c.5 0 1-.1 1.3-.3l2.6 2.5zm-24-2.5c0-2.2 1.6-3.4 3.7-3.7l2.9-.4c.7-.1.9-.4.9-.8 0-.7-.6-1.3-1.8-1.3-1.3 0-2 .9-2.1 1.8l-3.3-.7c.1-1.8 1.8-4.1 5.4-4.1 4 0 5.5 2.2 5.5 4.8v6c0 1 .1 1.8.1 1.9h-3.4c0-.1-.1-.5-.1-1.4-.6 1-1.8 1.7-3.5 1.7-2.7-.1-4.3-1.8-4.3-3.8zm5.2 1c1.1 0 2.3-.5 2.3-2.5v-.5l-2.3.4c-.8.1-1.4.5-1.4 1.4 0 .6.4 1.2 1.4 1.2zm21.6-12.7l3-2.9h.8V10l3.8-4.2h4.9l-4.8 5.2 4.9 7.2h-4.6l-2.9-4.4-1.2 1.3v3h-3.8v-15zm13.4 11.6l3.2-.6c0 .8.6 1.7 1.9 1.7 1 0 1.4-.5 1.4-1.1 0-.4-.3-.8-1.2-1l-1.4-.3c-2.6-.6-3.7-2.1-3.7-3.8 0-2.3 2-4.1 4.8-4.1 3.6 0 4.8 2.2 5 3.7l-3.1.5c-.1-.8-.6-1.5-1.8-1.5-.7 0-1.3.4-1.3 1.1 0 .5.4.8 1 .9l1.6.3c2.6.5 3.8 2.1 3.8 3.9 0 2.1-1.6 4.2-4.9 4.2-3.9 0-5.2-2.5-5.3-3.9z"/><path fill="#FAA" d="M10.3 18.5L6.1 11H2.6v7.5H0V.2h7.7c3.5 0 5.6 2.4 5.6 5.4 0 2.6-1.7 4.7-4.4 5.2l4.4 7.6h-3zM2.6 8.7h4.7c2.1 0 3.5-1.2 3.5-3.1 0-1.9-1.4-3.2-3.5-3.2H2.6v6.3zm22.2 5.5l2.1.7c-.7 2.2-2.7 3.9-5.6 3.9-3.3 0-6.2-2.4-6.2-6.6 0-3.9 2.8-6.5 5.9-6.5 3.8 0 6 2.6 6 6.5 0 .3 0 .6-.1.8h-9.3c.1 2.2 1.6 3.8 3.7 3.8 2-.1 3-1.2 3.5-2.6zM17.6 11h6.8c-.1-1.8-1.2-3.2-3.4-3.2-2 0-3.3 1.6-3.4 3.2zm11.6 4.1c0-2.2 1.6-3.4 3.8-3.8l3.4-.5c.7-.1 1-.5 1-.9 0-1.2-.8-2.2-2.7-2.2-1.7 0-2.7 1.1-2.8 2.5l-2.3-.5c.3-2.4 2.4-4 5.1-4 3.7 0 5.2 2.1 5.2 4.5v6.2c0 1.1.1 1.7.2 2h-2.4c-.1-.3-.1-.8-.1-1.7-.5.9-1.8 2.1-4 2.1-2.7 0-4.4-1.7-4.4-3.7zm4.5 1.7c2 0 3.6-1 3.6-3.7v-.6l-3.8.6c-1 .2-1.8.7-1.8 1.9 0 .9.8 1.8 2 1.8zm19.1.5c-.9.9-2.3 1.5-4.1 1.5-3.6 0-6.3-2.8-6.3-6.6 0-3.9 2.7-6.6 6.2-6.6 1.9 0 3.3.7 4.2 1.6L51.2 9c-.5-.6-1.3-1.1-2.5-1.1-2 0-3.8 1.4-3.8 4.3 0 2.8 1.8 4.3 3.8 4.3 1.1 0 1.9-.4 2.5-.9l1.6 1.7zm7-14.1v2.9h2.7v2.2h-2.7v6.4c0 1.1.5 1.7 1.7 1.7.3 0 .7-.1 1-.1v2.1c-.2.1-.8.2-1.6.2-2.1 0-3.5-1.3-3.5-3.5V8.3H55v-.9l4-4.2h.8zm8.3 15.3h-2.4V6.1h2.4v12.4zm-2.5 3.9c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3zM82.9 6.1L78 18.5h-2.4l-5-12.4h2.7l3.5 9.5 3.6-9.5h2.5zm10.6 8.1l2.1.7c-.7 2.2-2.7 3.9-5.6 3.9-3.3 0-6.2-2.4-6.2-6.6 0-3.9 2.8-6.5 5.9-6.5 3.8 0 6 2.6 6 6.5 0 .3 0 .6-.1.8h-9.3c.1 2.2 1.6 3.8 3.7 3.8 2-.1 3-1.2 3.5-2.6zM86.4 11h6.8c-.1-1.8-1.2-3.2-3.4-3.2-2.1 0-3.3 1.6-3.4 3.2z"/></svg>
				</Link>
				<div className='header-preorder'>Pre-register</div>
				<div className={classnames('m-header-hamburger', {'isOpen': this.state.menuOpen})} onClick={this.handleHamburgerClick.bind(this)}>
					<div className='m-header-hamburger-inner' />
				</div>
				<MobileMenu open={this.state.menuOpen} />
			</header>
		)
	}
}
