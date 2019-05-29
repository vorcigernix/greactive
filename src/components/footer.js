import React from "react"
import Icon from './icon'
import sbksLogoIcon from '../images/sbks-logo.svg'
import footerLeftIcon from '../images/footer-left.svg'
import footerRightIcon from '../images/footer-right.svg'
import footerMobileLeftIcon from '../images/mob-footer-left.svg'
import footerMobileRightIcon from '../images/mob-footer-right.svg'

const Footer = () => (
    <footer className='footer'>
        <Icon src={footerLeftIcon} className='footer-left' />
        <Icon src={footerMobileLeftIcon} className='footer-mobile-left' />
        <div className='footer-block'>
            <div className='footer-title'>Contact Us</div>
            <div className='footer-text'>Do you have any questions? Do not hesitate to contact our team.</div>
            <a className='footer-email' href={'mailto:adam.sobotka@socialbakers.com'}>adam.sobotka@socialbakers.com</a>
        </div>
        <div className='footer-block'>
            <div className='footer-title'>Partnership</div>
            <div className='footer-text'>
                Hackathon is sponsored by
                <Icon src={sbksLogoIcon} className='footer-sbks-logo' />
            </div>
            <a className='footer-become-btn' href='mailto:hackathon@socialbakers.com'>Become a partner</a>
        </div>
        <Icon src={footerRightIcon} className='footer-right' />
        <Icon src={footerMobileRightIcon} className='footer-mobile-right' />
    </footer>
)

export default Footer
