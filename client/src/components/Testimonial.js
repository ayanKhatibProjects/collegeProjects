import React from "react";
import "../style/testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    // infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        We appreciate you , you made our learning easy to understand ,
                        You truly care about your Students
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Great Support
                      </h6>
                      <p>
                     Thank you for your hardwork in supporting my son as they develop
                     with your support our son has developed into a confident belief 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Angelina jolly</h6>
                        <p>washington, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent web App
                      </h6>
                      <p>
                        This website is very much useful.This website really has skillful courses for student
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Rohan Rajput</h6>
                        <p>Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;