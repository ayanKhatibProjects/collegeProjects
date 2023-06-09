import React, { Fragment } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CompanySection from "./CompanySection"
// import CompanySection from "./y-section/Company";

import AboutUs from "./AboutUs";
import Courses from "./Courses";
import ChooseUs from "./ChooseUs";
import Features from "./Features";
// import FreeCourse from "./FreeCourse";

import Testimonials from "./Testimonial";

import Newsletter from "./Newletter";
import Footer from "./Footer";
import { Form } from "reactstrap";
import FreeCourse from "./FreeCourse";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySection/>
      {/* <CompanySection /> */}
      <AboutUs />

      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse/>
      {/* <FreeCourse /> */}
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;