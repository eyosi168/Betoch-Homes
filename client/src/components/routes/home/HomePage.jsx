import React from "react";
import "./HomePage.scss";
import SearchBar from "../../searchBar/SearchBar.jsx";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Home & Get Your Dream Place</h1>
          <p>
            Discover handpicked stays that offer more than just a bed—experience
            the soul of a new city from the comfort of a uniquely curated home.
            From sun-drenched lofts to cozy woodland retreats, we connect you
            with local hosts who turn every trip into a local's perspective.
            Your next unforgettable memory is just a booking away; stop
            traveling, and start living there.
          </p>
          <SearchBar></SearchBar>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of experiance</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
