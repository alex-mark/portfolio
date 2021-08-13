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
            style={{ maxWidth: 350, width: "45%", marginBottom: 60 }}
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
  padding: 48px 10px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
  width: 100%;
  max-width: 700px;
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
