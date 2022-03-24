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
          <a className="nav-link" href="#"><Link className='Link' to='/Password' >Password</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link className='Link' to='/Pomodoro' >Pomodoro</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">  <Link className='Link ' to='/KeyBoardTest' >KeyBoardTest</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">  <Link className='Link ' to='/ticTacToe' >TicTacToe</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
            
            
          
      
    )
}

export default Navbar
