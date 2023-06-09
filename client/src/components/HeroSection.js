import React ,{useState}from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../images/hero-img1.png";
import {Link} from 'react-scroll'
import "../style/hero.css";

const HeroSection = () => {
  const[place,setPlace] = useState("")
  return (
    <div className="zIndex">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              Teaching should be such that what is offered is <br/> perceived as a valuable gift and not as a hard duty.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search"  onChange={(e)=>{if(e.target.value === "about"){setPlace("about")}
              else if(e.target.value === "course" ){setPlace("course")}else if(e.target.value === "free"){setPlace("free")}}}/>
              {console.log(place)}
           
              <Link to={place} spy={true} smooth={true} duration={100} style={{background:'#F65058FF',color:'white',padding:'7px 25px',borderRadius:'50px'}}>Search</Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;