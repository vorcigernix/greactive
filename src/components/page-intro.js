import React from "react"
import Icon from './icon'

import pageIntroLeftIcon from '../images/page-intro-left.svg'
import pageIntroRightIcon from '../images/page-intro-right.svg'

const PageIntro = (title) => (
    <div className='page-intro'>
        <Icon src={pageIntroLeftIcon} className='page-intro-left' />
        <h1 className='page-intro-title'>{title}</h1>
        <h3 className='page-intro-date'>13 — 15 September 2019</h3>
        <Icon src={pageIntroRightIcon} className='page-intro-right' />
    </div>
)

export default PageIntro
