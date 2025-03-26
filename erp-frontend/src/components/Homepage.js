import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

function HomePage() {
  const imageSlides = [
    "https://www.sgpbellary.com/images/slides3/img4.jpg",
    "https://www.sgpbellary.com/images/slides3/img5.jpg",
    "https://www.sgpbellary.com/images/slides3/img14.jpg",
    "https://www.sgpbellary.com/images/slides3/img1.jpg",
    "https://www.sgpbellary.com/images/slides3/img3.jpg",
    "https://www.sgpbellary.com/images/slides3/img10.jpg",
    "https://www.sgpbellary.com/images/slides3/img12.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Sanjay Gandhi Polytechnic Bellary</h1>
          <h2>Placement Cell</h2>
        </div>
      </section>

      {/* About Placement */}
      <section className="placement-info section-container">
        <h2>Placement Highlights</h2>
        <p>100+ companies visiting every year</p>
        <p>85%+ students get placed annually</p>
        <p>Highest Package: <strong>12 LPA</strong> | Average Package: <strong>4.5 LPA</strong></p>
      </section>

      {/* College Images Slider */}
      <section className="college-slider section-container">
        <h2>Campus Glimpses</h2>
        <Slider {...sliderSettings}>
          {imageSlides.map((image, index) => (
            <div key={index} className="slide-container">
              <img src={image} alt={`College View ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </section>

      {/* Our Institutions */}
      <section className="institutions section-container">
        <h2>Our Institutions</h2>
        <p>Institutions run by T.E.H.R.D Trust (R)</p>
        <div className="institutions-logos">
          {[
            "bitm.png",
            "bbc.png",
            "sgp.png",
            "bpsc.png",
            "bpscpu.png",
          ].map((logo, index) => (
            <img key={index} src={`https://www.sgpbellary.com/images/clients/${logo}`} alt={logo.replace(".png", "").toUpperCase()} />
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact section-container">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> "Vidya Soudha", Sanjay Gandhinagar, Ballari - 583104</p>
        <p><strong>Phone:</strong> 08392 266331 / 267833</p>
        <p><strong>Mobile:</strong> 9008066235 / 8197778607</p>
        <p><strong>Email:</strong> <a href="mailto:sgpbellary@gmail.com">sgpbellary@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sanjay Gandhi Polytechnic Bellary. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
