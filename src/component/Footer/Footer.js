import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container a_footer py-3 flex justify-between'>
      <p>@ 2024 edusity. All rights reserved</p>
      <ul className='flex gap-4'>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer