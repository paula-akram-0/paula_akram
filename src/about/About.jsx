import React from 'react'
import aboutphoto from './SECTION2.png'

export default function About() {
  return (<>
    
  <div className="container-fluid d-flex align-items-center vh-100">
    <div className="sec2 m-auto">
    <div className="sec2-content">
      <h2 className='text-light'>About</h2>
        <h4 className='text-light lineText1'>Hello, I’m paula</h4>
        <p className="prag  mb-4">A Frontend Developer looking for a full-time position in the field of Frontend developer where I can apply my knowledge and skills for continuous improvement and find an opportunity to capitalize on my skills and technical abilities.</p>
        <h4 className='text-light lineText2'>Education</h4>
        <div className="row">
          <div className="col-md-6">
            <h5 className='text-light'>DIPLOMA</h5>
            <p className=" prag ">Frontend diploma from <br/>
              route Academy</p>
              <p className='prag'>March,2022 TO JULY,2022</p>
          </div>
          <div className="col-md-6">
            <h5 className='text-light'>Bachelor Degree</h5>
            <p className=" prag">Agricultural Siences,<br/> Benha University</p>
              <p className='prag'>2017 TO 2021</p>
          </div>
        </div>
        <p className="text-muted"></p>
        <a download="" className="btn text-uppercase download-cv" href="https://drive.google.com/file/d/10RgFTFFdfJijtm1T3ElPR7YNiK5EMMPo/view?usp=sharing">download cv</a>
    </div>
    </div>
    

  </div>

  </>
    
  )
}
