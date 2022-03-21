import React from 'react'
import image from '../assests/img2.jpg'
import '../style/Rendezvous.css'
function RendezVous() {
  return (
    <div className='rendezvous' >
     
    <div className='one' style={{backgroundImage:`url(${image})`}}>
    
    </div>


    <div className='two'> 
    
    <h1>hello</h1>
    <form id="rendezvous-form">
    <label>nom et prenom</label>
    <input type={"text"} placeholder="entre votre nom et prenom" required></input>
    <label>numero du telephone</label>
    <input type={"text"} placeholder="entre votre numero" required></input>
    <label>email</label>
    <input type={"email"} placeholder="entre votre email"></input>
    <label>motif</label>
    <select>
    <option>consultation </option>
    <option>plombage</option>
    <option>branchiment</option>
    <option>bronchiment</option>
    </select>
    <button type="submit"> valider</button>
    </form>
    
    
    </div>
       
    </div>

    
  )
}

export default RendezVous
