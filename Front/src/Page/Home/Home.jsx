import React from "react";
import Service from "../Service/Service";
import WeRepairLog from "../WeRepairLog/WeRepairLog";
import Location from "../Location/Location";
import ContactUs from "../ContactUs/ContactUs";
import HeroPage from "../HeroPage/HeroPage";

function Home() {
  return (
    <>
      <HeroPage />
      <Service />
      <WeRepairLog />
      <Location />
      <ContactUs />
    </>
  );
}

export default Home;
