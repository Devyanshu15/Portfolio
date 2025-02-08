import React from 'react'

function Contact() {
  return (
    <secton> 
      <div className='contact-page'>

    <center>
     <h2 className='titele-text'>CONTACT <span>ME</span></h2>
     </center>

     <div className='form-container'>
     <div className='left'>
      <div className='c-box'>
       <i class='fas fa-map'></i>
       <div className='info'>
        <h3>Address:</h3><br/>
        <p> Mahalaxmi Colony Satpur Aburoad Rajasthan, india</p>
       </div>
      </div>

      <div className='c-box'>
       <i class='fas fa-envelope'></i>
       <div className='info'>
        <h3>Email:</h3><br/>
       <a href='mailto:gargdevyanshu4@gmail.com'> <p>gargdevyanshu4@gmail.com</p></a>
       </div>
      </div>

      <div className='c-box'>
       <i class='fas fa-phone'></i>
       <div className='info'>
        <h3>Number :</h3><br/>
       <a href='tel:+919549477287'> <p>+91 9549477287</p></a>
       </div>
      </div>

      <div className='share'>
      <a href='https://github.com/Devyanshu15/' className='fab fa-github' target='blank' rel='noreferrer'></a>
      <a href='#' className='fab fa-twitter' target='blank'  rel='noreferrer'></a>
      <a href='https://www.linkedin.com/in/devyanshu-garg-a0878322a?' className='fab fa-linkedin' target='blank'  rel='noreferrer'></a>

      </div>
     </div>
     
    

     <div className='form-div'>
      <center>
        <i className='fas fa-envelope'></i>
      </center>

        <form action="https://formspree.io/f/xdkazvjo" method="post">
          <input type='text' name="name" id="name" placeholder='Your name' className='input1'/>
          <input type='email' name="email" id="email" placeholder='Your mail' className='input1'/>
          <br/>
          <input type='text' name="subject" id="subject" placeholder='Subject' className='input2'/>
          <br/>
          <textarea cols='81' className='input2' placeholder='Message'></textarea>
          <br/>
          <input type='submit'  name="subject" id="subject" value='send massage' className='btn-form'></input>

        </form>
     </div>
    </div>
     </div>
     
    
     

 </secton>
  )
}

export default Contact
