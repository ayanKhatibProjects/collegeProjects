import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {Link} from 'react-scroll'
import "../style/footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "About US",
    url: "about",
  },

  {
    display: "Courses",
    url: "courses",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },


  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <div className="footer" style={{padding:'25px'}}>
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1" style={{color:'#F65058FF'}}>
              <i class="ri-pantone-line" style={{color:'#F65058FF'}}></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0" style={{color:'#FBDE44FF'}}>Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold" style={{color:'#F65058FF'}}>Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item" style={{color:'#FBDE44FF'}}>
                  {" "}
                 
                  <Link to={item.url} spy={true} smooth={true} duration={100}>{item.display }</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold" style={{color:'#F65058FF'}}>Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item " style={{color:'#FBDE44FF'}}>
                  {" "}
                  <Link to={item.url} spy={true} smooth={true} duration={100}>{item.display }</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" style={{color:"#FBDE44FF"}}>
            <h6 className="fw-bold" style={{color:'#F65058FF'}}>Get in Touch</h6>

            <p style={{color:'#FBDE44FF'}}>Address: K.J. Campus,Opp. I.T.I., javla-Savli,Savli</p>
            <p style={{color:'#FBDE44FF'}}> Phone: +88 0123456789 </p>
            <p style={{color:'#FBDE44FF'}}>Email: learners@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;