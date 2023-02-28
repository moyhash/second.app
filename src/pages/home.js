import React from "react";
import "./style.css";
import Header from "../compo/header";
import Footer from "../compo/footer";
import slide from'../images/slide1.png' 

const Home = () => {
  return (
    <>

     <Header />

      <link rel="stylesheet" type="text/css" href="style.css" />

      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="services">
        <div className="service">
          <h2>Service 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src={slide}  alt="Slide 1" />
        </div>
        <div className="service">
          <h2>Service 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service">
          <h2>Service 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="counter">
        <h2>Counter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Footer /> 

    </>
  );
};

export default Home;
