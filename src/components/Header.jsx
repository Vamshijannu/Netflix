import React from 'react'
import logo from "../../src/logo.png"
import "./Header.scss"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
function Header() {
    
  return (
    <>
    <nav className='header'>
     <img src={logo} alt='logo'/>
     <div className='list'>
       <Link > TV Shows</Link>
       <Link > Movies</Link>
       <Link > Recently Added</Link>
       <Link > My List</Link>
     </div>
     <ImSearch/>
    
    </nav>
      
    </>
  )
}

export default Header
