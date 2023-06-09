import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../images/web-development.png";
import courseImg02 from "../images/kids-learning.png";
import courseImg03 from "../images/seo.png";
import courseImg04 from "../images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "../style/freeCourse.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <div>
      <Container id="free">
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
            <div className="w-50 text-end" >
                <button className="btn" onClick={()=>{  window.location.assign("http://localhost:3000/videoCourse")}} style={{position:'relative',left:'663px',top:'10px'}}>See All</button>
               
              
              </div>
          </Col>
          

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FreeCourse;