import React from "react";
import { Component } from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Header from "../compo/header";
import Footer from "../compo/footer";
import Main from "../compo/main";
import slide from "../images/slide2.png";

class Html extends Component {
  /*MyComponent() {
    $(function () {
      $("#show_hide").html("<h3>&#9660; La Video</h3>");
    });
  }*/

  MyComponent() {
    $(function () {
      if ($("#show_hide").text() === "\u25b6 La Video") {
        $("#show_hide").text("\u25bc La Video");
      } else {
        $("#show_hide").text("\u25b6 La Video");
      }
    });
  }

  // React Jquery Function
  Myfunction = () => {
    const var1 = findDOMNode(this.refs.toggle);
    $(var1).slideToggle(2);
    this.MyComponent();
  };

  ////////////////////////////////////////////////

  render() {
    return (
      <>
        <Header />

        <body bgcolor="#000">
          <h2>
            {" "}
            <Main phrase="React Html Page" />{" "}
          </h2>

          <main>
            <img src={slide} alt="" />
          </main>

          <section>
            <nav className="mylink">
              <a href="#">link11</a>
              <a href="#">link11</a>
              <a href="#">link11</a>
              <a href="#">link11</a>
              <a href="#">link11</a>
              <a href="#">link11</a>
              <a href="#">link11</a>
            </nav>
          </section>

          {/*/////////////////////////////////////////*/}
          <h3 id="show_hide" ref="show" onClick={this.Myfunction}>
          &#9654; La Video
          </h3>

          <div ref="toggle" className="embedresize">
            <iframe
              src="https://www.youtube.com/embed/1sX18q2VAT0"
              frameborder="1"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              title="This is a unique title"
              onScroll="auto"
              width="800"
              height="550"
            ></iframe>
          </div>
        </body>

        <Footer />
      </>
    );
  }
}

export default Html;
