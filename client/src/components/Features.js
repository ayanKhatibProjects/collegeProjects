import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "With our prominent courses you can easily learn quickly with your enjoyable time ,Furthermore you can also learn by just holding snack's and coke in your hand",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Anything is possible when you have the right team to support you that's what you will have here",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Get Certified:a certificate easily moves you at least thousand rows ahead of other job candidates,with similar knowledge",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <div>
      <div className="container">
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Features;