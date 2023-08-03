import React from "react";
import "./home.css";
import Howwework from "./howwework/Howwework";
// import Restaurant from './featureReataurant/Restaurant';
import Grow from "./GrowBuisness/Grow";
// import Review from './review/Review';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="home">
          <section className="home-wrapper">
            <div className="firstview">
              <main className="search">
                <div className="slogan">
                  <h4>
                    <span>You</span> Crave,<span> We</span> Deliver
                  </h4>
                  <p>
                    Your Local Restaurant Guide that
                    <br />
                    lets you satisfy that craving.
                  </p>
                </div>
                <div className="search-restaurant">
                  <section className="select-restaurant">
                    <select name="" id="">
                      <option value="">mary</option>
                      <option value="">mary</option>
                      <option value="">mary</option>
                      <option value="">mary</option>
                      <option value="">mary</option>
                    </select>
                  </section>
                  <button className="select-search">Select Restaurant</button>
                </div>
              </main>
              <main className="bacckima">
                <img src="./src/componnet/Home/assest/fist.svg" alt="" />
              </main>
            </div>
          </section>
        </div>

        <Howwework />
        {/* <Restaurant/> */}
        <Grow />
        {/* <Review/> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
