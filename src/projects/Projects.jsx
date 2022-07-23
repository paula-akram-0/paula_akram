import React from 'react'
import fokirPhoto from './img/fokir.png'
import simonePhoto from './img/simone.png'
import DevfolioPhoto from './img/Devfolio.png'
import bezelPhoto from './img/bezel.png'
import crudPhoto from './img/crud.png'
import loginPhoto from './img/login.png'
import sliderPhoto from './img/slider.png'
import weatherPhoto from './img/weather.png'
import bookPhoto from './img/book.png'
import quizPhoto from './img/quiz.png'
import moviePhoto from './img/movie.png'

export default function Projects() {
  return (
    <>
      <div className='container mt-5 '>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/ui_fokir-website/"><img src={fokirPhoto} /></a>
        <div className='card-body'>
          <p>It is a user interface template to present customer skills as a resume, built with HTML and CSS (floating and clear: Bath) and 100% responded.</p>
        </div>
        </div>
          </div>
          <div className=' c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/ui_Simone-website/"><img src={simonePhoto} /></a>
        <div className='card-body'>
          <p>it is a simple template as a personal portfolio using HTML and CSS (Responsive 100%).</p>
        </div>
        </div>
          </div>
          <div className=' c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/ui_DevFolio/"><img src={DevfolioPhoto} /></a>
        <div className='card-body'>
          <p>It is a user interface template to showcase the skills of clients as a resume, built with HTML and CSS, Bootstrap, grid system and 100% responded.</p>
        </div>
        </div>
            </div>
            <div className=' c-m col-md-4'>
              <div className='projectCard'>
               <a target="_blank" href="https://paula-akram-0.github.io/ui_bezel.-website/"><img src={bezelPhoto} /></a>
                  <div className='card-body'>
                    <p>it is a project as a web site portfolio using HTML , CSS and Bootstrap.</p>
                  </div>
        </div>
            </div>
            
        </div>


        <div className='row d-flex justify-content-center align-items-center'>
          <div className='c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/CRUD_project/"><img src={crudPhoto} /></a>
        <div className='card-body'>
          <p>It is a product management application that relies on the browser's local storage for product storage and also includes checking for input errors. The application is built with HTML, CSS, JavaScript, DOM, and RegExp.</p>
        </div>
        </div>
          </div>
          <div className='c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/Smart-Login-System/"><img src={loginPhoto} /></a>
        <div className='card-body'>
          <p>it is a project for Login and Logout validation and store the data in local storage I order to view to the customer.</p>
        </div>
        </div>
          </div>
          <div className='col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/js_slider_photo/"><img src={sliderPhoto} /></a>
        <div className='card-body'>
          <p>it is a valid and responsive app to show set of photos in Slider and quotes (Dom project)</p>
        </div>
        </div>
            </div>
            <div className='col-md-4'>
              <div className='projectCard'>
               <a target="_blank" href="https://paula-akram-0.github.io/Weather-app_API/"><img src={weatherPhoto} /></a>
                  <div className='card-body'>
                    <p>it is an app to forecast the weather for 3 days by JavaScript with API used (Weather API).</p>
                  </div>
        </div>
            </div>
            
        </div>

        <div className='row d-flex justify-content-center align-items-center mt-5'>
          <div className='c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/Bookmarker/"><img src={bookPhoto} /></a>
        <div className='card-body'>
          <p>it is a simple project for CRUD Operators validation and store the data in local storage I order to view to the customer.</p>
        </div>
        </div>
          </div>
          <div className='c-m col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/Quiz_Project/"><img src={quizPhoto} /></a>
        <div className='card-body'>
          <p>This app is based on OOP, which is a mini test in which the user selects the number of questions and the field. Created with HTML, CSS, JavaScript, jQuery, and Bootstrap.</p>
        </div>
        </div>
          </div>
          <div className='col-md-4'>
          <div className='projectCard'>
        <a target="_blank" href="https://paula-akram-0.github.io/themoviedb-_API-app/"><img src={moviePhoto} /></a>
        <div className='card-body'>
          <p>it is an app to show information on the movies and also form a valid registeration by JavaScript with API and jQuery ,HTML,CSS,Bootstrap.</p>
        </div>
        </div>
            </div>

            
        </div>



      
      </div>
    
    </>
  )
}
