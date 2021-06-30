import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import React from "react";
import { portfolioProjects } from "../utils/constants";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {}

const PortfolioGrid = ({}) => {
  return (
    <Container>
      {portfolioProjects.map((p, idx) => (
        <PortfolioCard
          key={idx}
          style={{ margin: 20, maxWidth: 500, width: "45%" }}
          {...p}
          image={`/images/portfolio/${p.image}`}
        />
      ))}
    </Container>
  );
};

export default PortfolioGrid;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 48px auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
