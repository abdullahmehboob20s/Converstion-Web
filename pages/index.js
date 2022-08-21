import FAQ from "layouts/FAQ";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Lottery from "layouts/Lottery";
import Navbar from "layouts/Navbar";
import UpcomingLotteries from "layouts/UpcomingLotteries";
import Winners from "layouts/Winners";
import React from "react";

function index() {
  return (
    <div>
      <div className="mb-20px">
        <Navbar />
      </div>
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Lottery />
      </div>
      <div className="mb-100px">
        <UpcomingLotteries />
      </div>
      <div className="mb-100px">
        <Winners />
      </div>
      {/* <div className="mb-100px">
        <FAQ />
      </div>
      <Footer /> */}
    </div>
  );
}

export default index;
