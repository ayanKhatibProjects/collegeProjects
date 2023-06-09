import React  from "react";
import { Container, Row, Col, Button } from "reactstrap";
import courseImg1 from "../images/web-design.png";
import courseImg2 from "../images/graphics-design.png";
import courseImg3 from "../images/ui-ux.png";
import "../style/courses.css";
import CourseCard from "./Card";


const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];


const Courses = () => {
 



//  function navigateToVideoCourse(){
//    navigate('/videoCourse', {replace: true})
 
//  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50" id="course">
                <h2>Our Popular Courses</h2>
                <p>
                This popular course helps to imporve your skill's at  next level so you could stand out between smart people
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={()=>{  window.location.assign("http://localhost:3000/videoCourse")}}>See All</button>
               
              
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
