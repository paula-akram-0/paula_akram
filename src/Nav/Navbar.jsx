import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (<>
      <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand text-uppercase" to="home">paula</Link>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 hov-link">
          <li className="nav-item ">
            <Link className="nav-link active ps-3 " aria-current="page"to='home'>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active ps-3 " aria-current="page" to='about'>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active ps-3 " aria-current="page" to='skills'>SKILLS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active ps-3 " aria-current="page" to='projects'>PORTFOLIO</Link>
          </li>





        </ul>

      </div>
    </div>
  </nav>
  </>
    
  )
}
