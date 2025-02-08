import React from 'react'
import hospital from './images/hospital.png'
import gptclone from './images/gptclone.png'
function Project() {
  return (
    <secton>
      <div className='project-page'>
       <center>
        <h2 className='titele-text'>MY <span>PROJECTS</span></h2>
        </center>
        <div className='proj-container'>
            <div className='p-box'>
              <div className='overlay'>
                <center>
                <h3>Hospital site</h3> 
                </center>
                <p>"Your Health, Our Priority – Advanced Medical Care with Trust."</p>
                  <center>
                  <a href='https://hospital-project-psi.vercel.app/' target='blank'>View Project</a>
                  </center> 
              </div>
            <img src={hospital}></img>
            
            </div>

            <div className='p-box'>
            <div className='overlay'>
                <center>
                <h3>ChatGpt Clone</h3> 
                </center>
                <p> Your Smart AI Companion - Instant Answers, Anytime </p>
                  <center>
                  <a href='https://chat-gpt-clone-opal-seven.vercel.app/'  target='blank'>View Project</a>
                  </center>  
              </div>
            <img  src={gptclone}></img>
          </div>
          <div className='p-box'>


          <div className='overlay' style={{display: "block"}} >
                <center>
                <h3></h3> 
                </center>
                <p></p>
                  <center>
                  <a href='#'>On Development !</a>
                  </center>
                 

              </div>
            <img ></img>
          </div>
        </div>
        </div> 
    </secton>
  )
}

export default Project
