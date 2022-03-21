import React from 'react'
import { Link } from 'react-router-dom'
import homeimage from '../assests/image2.jpg'
import '../style/Home.css'
function Home() {
  return (
    <div>
      <div className='home' style={{backgroundImage:`url(${homeimage})`}} >
      <div className='headercontainer'>
          <h1>welcome </h1>
          <p>At The Clinic East Ballina, our aim is to provide for all of your and your family 
            </p>
          <Link to="/rendezvous">
          <button>Rendez-Vous</button>
          </Link>

        </div>
      
      
      </div>
    </div>
  )
}

export default Home
