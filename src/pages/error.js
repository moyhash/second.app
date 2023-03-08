
import React from 'react';
//import Header from "../compo/header";
//import Footer from "../compo/footer";

const Error = () => {
  return (

    <>
      {/*<Header />*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <title>Ooops error</title>
      <h1 className="error">404...</h1>
      <p className="message">sorry, pa​ge not found!!</p>
      <p className="details">
        The page you are looking for was moved, removed, renamed or might never
        existed
      </p>
      <style
        data-mode="XL"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\n      .error{\n        font-size: 7.5rem;\n        font-weight: 700;\n        margin-top: 60px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 0;\n        color: rgba(212, 63, 22, 0.692);\n      }\n\n      .message {\n        font-size: 24px;\n        font-weight: 700;\n        line-height: 1;\n        text-transform: uppercase;\n        margin-top: 20px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 0;\n        color: rgba(41, 24, 19, 0.692);\n      }\n\n      .details {\n        background-image: none;\n        font-size: 1.5rem;\n        font-weight: 700;\n        width: 525px;\n        margin-top: 20px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 0;\n        color: rgba(43, 90, 120, 0.692);\n      }\n"
        }}
      />
      {/*<Footer />*/}
    </>

  );
}

export default Error;
