import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="fixed-top">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Страницы</a>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        
        <li className="nav-item">
          <Link className='nav-link active Link' to='/Password' >Password</Link>
        </li>
        <li className="nav-item">
         <Link className='nav-link active Link' to='/Pomodoro' >Pomodoro</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link active Link ' to='/KeyBoardTest' >KeyBoardTest</Link>
        </li>
        <li className="nav-item">
         <Link className='nav-link active Link ' to='/ticTacToe' >TicTacToe</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link active Link" to='/weather' >Weather</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
            
            
          
      
    )
}

export default Navbar
