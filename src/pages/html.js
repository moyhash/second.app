import React from "react";
import Header from "../compo/header";
import Footer from "../compo/footer";

const Html = () => {
  return (
    <div>

      <Header />
      
      <body bgcolor="black">

      <h2>React Html Page </h2>
      <div className="embedresize">
      <iframe src="https://www.youtube.com/embed/1sX18q2VAT0"  frameborder="1" allowFullScreen="1" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"       
      title="This is a unique title" onScroll="auto"  width="800" height="600"></iframe>
      </div>
      </body>
    

      <Footer />
      
    </div>
  );
};

export default Html;
