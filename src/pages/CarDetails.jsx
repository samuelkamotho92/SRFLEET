import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { insurances } from "../assets/data/insurance";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import './carDetails.css';
const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.serviceName === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);
  // style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  return (
    <Helmet title={singleCarItem.serviceName}>
      <section>
        <Container>
          <Row>
            <Col lg="6" >
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.serviceName}</h2>
                <p className="section__description">
                  {singleCarItem.description}
                </p>
              </div>
            </Col>
            <Col lg='6' style={{ margin: "40px auto" }}>
              <div className="car__info">
                <p className="section__description">
                  {singleCarItem.descriptionTwo}
                </p>
              </div>
            </Col>
            <Col lg='6' style={{ margin: "40px auto" }}>
              <div className="car__info">
                <p className="section__description">
                  {singleCarItem.descriptionThree}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {slug === 'Insurance services' && <h5 className="title">Insurances</h5>}
      {
        slug === 'Insurance services' && <section className="insuranceCont">

          {
            insurances.map((insurance, id) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={insurance?.image} alt={insurance?.name} style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div className="flip-card-back">
                    <h4>{insurance?.name} / {insurance?.swahiliName}</h4>
                    <p>{insurance?.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
      }

    </Helmet>
  );
};

export default CarDetails;
