import React from 'react'
import myphoto from './nwdn_file_temp_1623767045786.jpg'
import { Typewriter } from 'react-simple-typewriter'
export default function Home() {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
  
  return (
    <>
          <div className="content-home d-flex flex-column justify-content-center align-items-center">
            <div>
            <img src={myphoto}/>
            </div>

          <h2 className='text-light'>Hey</h2>
          <h1 className='text-light'>I AM paula</h1>
           

           
<h3 className='text-light'>
  <span  className="typewrite" data-period="2000" data-type='[ "front-end developer" ]'>
    <span className="wrap"></span>
  </span>
</h3>

          <div className="mt-2 bt d-flex  flex-column justify-content-center align-items-center w-100 ">
          <btn>
          <a download="" className="btn btn2 GET-CV" href="https://drive.google.com/file/d/10RgFTFFdfJijtm1T3ElPR7YNiK5EMMPo/view?usp=sharing">GET CV</a>
          </btn>
         
          <div className="row mt-2 justify-content-center">
            
            <div className="col-md-4 sec1-icons">
              <a href="https://www.facebook.com/bola.akram/" target="_blank"><i className="fa-brands fa-facebook-f fs-3"></i></a>
            </div>
            <div className="col-md-4 sec1-icons">
              <a href="https://github.com/paula-akram-0" target="_blank"><i className="fa-brands fa-github fs-3"></i></a> 
            </div>
            <div className="col-md-4 sec1-icons">
              <a href="www.paulaakram101@gmail.com" target="_blank"><i className="fa-solid fa-paper-plane fs-3"></i></a>
            </div>
            <div className="col-md-4 sec1-icons">
              <a href="https://www.linkedin.com/in/paula-akram-220787218/" target="_blank"><i className="fa-brands fa-linkedin-in fs-3"></i></a>
            </div>
  
          </div>
          </div>
          
     
        </div> 
    </>
  )
}
