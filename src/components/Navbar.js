import React, { Component } from 'react'
import jk from './787.gif'


const Navbar=()=> {


 
    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid" >
    
    <img src={jk} alt="" className='mx-3' />
    <a className="navbar-brand" href="#"><b>NewsRabbit</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/"><b>Home</b></a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link mx-2" href="/entertainment"><b>Entertainment</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/general"><b>General</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/health"><b>Health</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/science"><b>Science</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/sports"><b>Sports</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/technology"><b>Technology</b></a>
        </li>
        
        
      
      </ul>
    
    </div>
  </div>
</nav>
        
      </div>
    )
  }


export default Navbar
