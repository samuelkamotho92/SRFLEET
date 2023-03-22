import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to SR Fleet Management</h2>
              <p className="section__description">
              SR Fleet Management is a high quality, reliable and well experienced tracker vendor in Tanzania with headquarters in Dar es salaam. The company enjoys a countrywide presence of her services.
SR Fleet Management offers competitive prices and a world-class support for cars, taxis, ubers, bodaboda, cargo logistics, bajaji, security cameras among other tracking services.
At SR Fleet Management we excel all other tracking service providers by going beyond to provide a robust technology driven solutions that provide clients with necessary security measures such as reducing fleet labour costs by 99%, increase productivity by 91% and reduce fuel cost by 83%.

              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
