import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [color, setcolor] = useState()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">ImageGallery</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
          </svg>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="nav-item">

                <Link className="nav-link text-primary " aria-current="page" to="/"
                  onBlur={(e) => e.target.className = "nav-link text-primary"}

                  onFocus={(e) => e.target.className = "nav-link  text-success"} >Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-primary clr" to="/image" onBlur={(e) => e.target.className = "nav-link text-primary"} onFocus={(e) => e.target.className = "nav-link  text-success"}>Gallery</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-primary clr" to="/contact" onBlur={(e) => e.target.className = "nav-link text-primary"} onFocus={(e) => e.target.className = "nav-link  text-success"}>Contact</Link>
              </li>

            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link text-primary clr" to="/contact" onBlur={(e) => e.target.className = "nav-link text-primary"} onFocus={(e) => e.target.className = "nav-link  text-success"}>Login</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar