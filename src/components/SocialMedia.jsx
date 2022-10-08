import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://github.com/Santhosh-web'>
        <BsGithub />
      </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <a href='https://www.instagram.com/___this_is_sandy____/?igshid=YmMyMTA2M2Y%3D'>
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia
