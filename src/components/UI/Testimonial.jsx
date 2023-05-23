import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpeg";
import ava03 from "../../assets/all-images/ava-3.jpeg";
import ava04 from "../../assets/all-images/ava-4.jpeg";
import ava05 from '../../assets/all-images/ava-5.jpeg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I have been using your services for my transportation needs for over a year now, and I couldn't be happier. Your customer service is also top-notch, and they always go above and beyond to accommodate any special requests I may have. I highly recommend Srfleet Company to anyone in need of transportation services."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sam</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "As a logistics manager, I have worked with several fleet companies in the past, but none have matched the level of service provided by SR Fleet Company. What sets them apart is their attention to detail and their willingness to work closely with us to optimize our logistics operations. Their efficient tracking system allows us to monitor the status of our shipments in real-time. I am extremely satisfied with their services and would recommend SR Fleet Company without hesitation."
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jedidah</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Our company has been relying on SR Fleet Company for our corporate transportation needs, and they have exceeded our expectations at every turn. The fleet is comprised of modern and well-equipped products.  The team at SR Fleet Company is responsive and attentive, ensuring that all our requirements are met promptly. I highly commend their services and wouldn't hesitate to endorse them."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Kelvin</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Ever since we started using SRfleet Company for our delivery services, our efficiency has increased significantly. Their tracking system allows us to monitor our shipments in real-time, giving us peace of mind. The Company's customer support team is always available and responsive to our needs. We are extremely satisfied with their services and would recommend them to any business in need of reliable transportation."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Terry</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "SRfleet Company has been an invaluable partner for our event management company. The Company's attention to detail and commitment to customer satisfaction have made them our go-to choice for transportation services. We have received numerous compliments from our clients regarding the quality and reliability of their services. We highly appreciate their partnership and look forward to continuing our successful collaboration."

        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Testimonial;
