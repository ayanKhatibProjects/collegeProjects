import React from 'react';
import "../style/services.css"
import ALLHeader from "./ALLHeader"

export default function Services() {
  return (
    <div>
        <ALLHeader title={"Our Services"} />  
  <div className="row" style={{marginTop:'103px'}}>

   
  </div>
  <div className="row">
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fas fa-book" />
        </div>
        <h3>Education</h3>
        <p>
        Find the best online Education courses on Learners
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fas fa-play-circle" />
        </div>
        <h3>Easy to play</h3>
        <p>
        No need of verification just need of your finger to touch on button and you will be there to your educational journey
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fas fa-wrench" />
        </div>
        <h3>Service Heading</h3>
        <p>
        24/7 easily available for you , So your journey never get stop.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fab fa-apple" />
        </div>
        <h3>Good Quality</h3>
        <p>
        we believe Quality is not an act,it is a habit and we follow these, We never compromise on Quality
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fas fa-award" />
        </div>
        <h3>Certified Courses</h3>
        <p>
        Get Certified courses on a thumb of your finger
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className="fas fa-credit-card" />
        </div>
        <h3>Free Courses</h3>
        <p>
         Education is not a product to buy it's a way to make product, Therefore we do not charge for this journey.
        </p>
      </div>
    </div>
  </div>


    </div>
  )
}
