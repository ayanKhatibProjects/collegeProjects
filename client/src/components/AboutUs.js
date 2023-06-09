   
import React from "react";
// import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../images/about-us.png";
import CountUp from "react-countup";
import "../style/aboutus.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content" id="about">
              <h2>About Us</h2>
              <p>
              We're Here To Provide free courses because we believe in sharing to other's what we have especially knowledge We believe everyone should be able to make educational decisions with confidence. It's important to note that our site does not feature every university educational courses available on the market.<br/>
              
              This website is owned and operated by <span style={{color:'#1f194c',margin:'inherit'}}>Khatib Ayan,Sahaj Chugani & Mrunal Khopkar</span>
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={3} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;