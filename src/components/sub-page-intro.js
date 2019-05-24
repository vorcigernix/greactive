import React from "react"
import Icon from './icon'

import subPageIntroLeftIcon from '../images/subpage-intro-left.svg'
import subPageIntroRightIcon from '../images/subpage-intro-right.svg'

const SubPageIntro = (title) => (
    <div className='subPageIntro'>
        <Icon src={subPageIntroLeftIcon} className='subPageIntro-left' />
        <h1 className='subPageIntro-title'>{title}</h1>
        <h3 className='subPageIntro-date'>13 — 15 September 2019</h3>
        <Icon src={subPageIntroRightIcon} className='subPageIntro-right' />
    </div>
)

export default SubPageIntro
