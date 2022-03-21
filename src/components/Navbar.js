import { Link } from 'react-router-dom'
import React ,{useState}from 'react'
import logo from '../assests/logo2.jpg'
import '../style/Navbar.css'


function Navbar() {



    const[openLinks,setopenLinks]=useState(false);

    function toggleNavbar (){
        setopenLinks(!openLinks)
    }
  return (


    <div className='navbar'>

                <div className='leftside'>
                    <img src={logo}/>
                    
                </div>

                <div className='rightside'>

                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/doctors'>Doctors</Link>
                <Link to='/rendezvous' id='rdv'>Rendez-Vous</Link>
                
                </div>
      
    </div>
  )
}

export default Navbar
