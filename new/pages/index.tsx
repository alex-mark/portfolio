import React from "react";
import Contacts from "../components/Contacts";
import Heading from "../components/Heading";
import PortfolioGrid from "../components/PortfolioGrid";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div>
      <Heading />
      <ProjectCard />
      {/* Lima */}
      {/* Winemap.me */}
      <PortfolioGrid />
      <Contacts />
    </div>
  );
};

export default Home;
