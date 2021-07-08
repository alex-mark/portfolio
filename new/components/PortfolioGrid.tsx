import styled from "@emotion/styled";
import React from "react";
import { portfolioProjects } from "../utils/constants";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {}

const PortfolioGrid = ({}) => {
  return (
    <Container>
      <Header>some demo projects</Header>
      <Grid>
        {portfolioProjects.map((p, idx) => (
          <PortfolioCard
            key={idx}
            style={{ margin: 20, maxWidth: 500, width: "45%" }}
            {...p}
            image={`/images/portfolio/${p.image}`}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioGrid;

const Container = styled.div`
  margin: 48px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Header = styled.h2`
  font-size: 40px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
`;
