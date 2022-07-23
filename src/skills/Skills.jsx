import React from 'react'
import { render } from '@testing-library/react';
import typescript from './typescript.png'

export default function Skills() {
  return (<>
  <div class="section3 my-5" id="SKILLS"> 
  <div class="container text-center sec3-title ">
    <h2 class="fs-1">SKILLS</h2>
    
  </div>
  <div class="container">
  <h2 class="fs-1 text-light text-start">Technical</h2>
    <div class="row skillsCard justify-content-center">
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
        <i class="fa-brands fa-html5"></i>
        <h3 className='fs-6'>HTML5</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
        <i class="fa-brands fa-css3-alt"></i>
        <h3 className='fs-6'>CSS3</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
        <i class="fa-brands fa-js-square"></i>
        <h3 className='fs-6'>Javascript</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">

        <i class="fa-brands fa-bootstrap"></i>
        <h3 className='fs-6'>Bootstrap</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-j"></i>
        <h3 className='fs-6'>jQuery</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-brands fa-react fa-4x"></i>
            <h3>React.js</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <img src={typescript} />
        <h3 className='fs-6'>TypeScript</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-brands fa-sass fa-4x"></i>
            <h3 className='fs-6'>SASS</h3>
        
      </div>


 
    </div>
  </div>

  <div class="container">
  <h2 class="fs-1 text-light text-start">tools</h2>
    <div class="row skillsCard justify-content-center">
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-brands fa-npm fa-4x"></i>
            <h3 className='fs-6'>NPM</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-brands fa-github fa-4x"></i>
            <h3 className='fs-6'>Git&GitHub</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-bezier-curve fa-4x"></i>
            <h3 className='fs-6'>Adobe XD</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">

      <i class="fa-solid fa-sliders fa-4x"></i>
            <h3 className='fs-6'>photoshop</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-code fa-4x"></i>
            <h3 className='fs-6'>Visual Studio Code</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-brands fa-react fa-4x"></i>
            <h3 className='fs-6'>React.js</h3>
        
      </div>
      <div class="col-xl-2 col-md-4 sec3-item d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-bezier-curve fa-4x"></i>
            <h3 className='fs-6'>illustrator</h3>
      </div>


 
    </div>
  </div>
</div>


















    
  
  </>
    
  )
}
