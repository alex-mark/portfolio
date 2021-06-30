import React from "react";
import Contacts from "../components/Contacts";
import Heading from "../components/Heading";
import PortfolioGrid from "../components/PortfolioGrid";
import MainProjects from "../components/MainProjects";

const Home = () => {
  return (
    <div>
      <Heading />
      <MainProjects />
      {/* Lima */}
      {/* Winemap.me */}
      <PortfolioGrid />
      <Contacts />
    </div>
  );
};

export default Home;
