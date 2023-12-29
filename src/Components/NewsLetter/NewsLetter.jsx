import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Suscribe to our newsletter ansd stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Suscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
