import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BsFillPlayCircleFill } from "react-icons/bs";

import chooseImg from "../images/why-choose-us.png";
import "../style/chooseus.css"

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p style={{color:'black'}}>
              There are some things money can't buy. For everything else, there's Education
              And here we do provide it without any cost 
              We Help the student to grow their skills so they can filled this world with knowledge and with their upbringing skills
              we believe <span style={{color:"#28334AFF",fontWeight:'bold',margin:'inherit',letterSpacing:'2px',wordSpacing:'3px'}}>Quality is not an act,it is a habit</span>
              </p>
              <p style={{color:'black'}}>Here we have filtered best courses for you because your time is worth and we understand that.Furthermore you are not paying anything here if you are paying something is your precious time which will definitely prominent</p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;