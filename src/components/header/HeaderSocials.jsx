import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
   return (
      <div className='header__socials'>
         <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
         <a href="http://github.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
         <a href="http://dribble.com" target="_blank" rel="noopener noreferrer"><BsDribbble/></a>
      </div>
   )
}

export default HeaderSocials