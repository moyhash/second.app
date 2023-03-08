import React from "react";
import "./style.css";
import Header from "../compo/header";
import Footer from "../compo/footer";
import Main from "../compo/main";
import slide from '../images/slide1.png';

const Home = () => {
  return (
    <>

      <Header />

      <link rel="stylesheet" type="text/css" href="style.css" />

      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p><Main phrase="variable" /></p> {/* add the parametrer  */}
      </div>

      <div className="services">
        <div className="service">
          <h3>Service 1</h3>
          <p><Main /></p>
          <img src={slide} alt="Slide 1" />
        </div>
        <div className="service">
          <h3>Service 2</h3>
          <p><Main /></p>
        </div>
        <div className="service">
          <h3>Service 3</h3>
          <p><Main /></p>
        </div>
      </div>
      <div className="counter">
        <h3>Counter</h3>
        <p><Main /></p>
      </div>

      <Footer />

    </>
  );
};

export default Home;
