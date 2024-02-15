import React from "react";
import shoe from "../assets/shoe2.png";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="text-holder">
        <div className="holder">
          <p className="first">
            YOUR FEET <br /> DESERVES THE <br /> BEST SHOES
          </p>
          <p className="second">
            Your feet deserves the best and we are here to help you with our
            shoes.Your feet deserves the best and we are here to help you with
            our shoes.Your feet deserves the best and we are here to help you
            with our shoes.
          </p>
          <button className="shop">Shop Now</button>
          <button className="cat">Category</button>
        </div>
      </div>
      <div className="img-holder">
        <img src={shoe} className="shoe" alt="shoe img" />
      </div>
    </div>
  );
};

export default Home;
