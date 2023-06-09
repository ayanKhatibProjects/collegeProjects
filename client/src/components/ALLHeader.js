import React from 'react'
import "../style/allHeader.css"

export default function ALLHeader(props) {
  return (
    <div>
        <div className='nav_ALL'>
     <div class="container_ALL nav_container_ALL">


           <h4 style={{color:'white',fontWeight:'bolder',position:'relative',left:'-40px'}}><i class="ri-pantone-line" style={{color:'#F65058FF'}}></i> Learners</h4>

           <h1 style={{color:'white',fontWeight:'bolder'}}>{props.title}</h1>
           <ul class="nav_menu_ALL">
     
                 <li><a href="home/"> Home </a></li>
                 <li><a href="about.html"> About </a></li>
                 <li><a href="courses.html"> Courses </a></li>
                 <li><a href="contact.html"> Contact </a></li>
                 <li><a href="/"> Log out </a></li>
           </ul>
           <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
<button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
           </div>
           </div>
    </div>
  )
}
