import React from 'react'
import { Instagram ,Facebook,Twitter, } from '@mui/icons-material'
import '../style/Footer.css'
function Footer() {
  return (
    <div className='footer'>
            <div className='socialMedia'>
            <Instagram/>
            <Facebook/>
            <Twitter/>
            </div>
            <p>&copy;dentalcare.com</p>
    </div>
  )
}

export default Footer
