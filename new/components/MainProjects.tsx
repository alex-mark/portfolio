import styled from "@emotion/styled";
import { Link } from "@material-ui/core";
import React from "react";

interface ProjectCardProps {}

const MainProjects = ({}) => {
  return (
    <Container>
      {/* <ProjectWrapper>
        <Header>Thinc</Header>
        <Text>Collaborative knowledge management tool.</Text>
        <Text>Beta is coming soon.</Text>
      </ProjectWrapper> */}

      <ProjectWrapper>
        {/* Add preview or logo */}
        <a href="https://winemap.me">
          <Header>Winemap.me</Header>
        </a>
        <Text>
          If you happened to be in Moscow – find a good place to enjoy some
          wine.
        </Text>
        <Text>Technology demonstrator that turned into real product.</Text>
        {/* Switch to chips */}
        <Text>
          Under the hood: React, Next.js, Apollo GraphQL, TypeScript, TypeOrm,
          PostgreSQL.
        </Text>
      </ProjectWrapper>

      {/* <ProjectWrapper>
        <Header>PathFinder</Header>
        <Text>Visualizer for popular path finding algorithms.</Text>
      </ProjectWrapper> */}
    </Container>
  );
};

export default MainProjects;

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 48px 15px;
  border-bottom: 1px solid #ddd;
`;

const ProjectWrapper = styled.div`
  margin-bottom: 45px;
`;

const Header = styled.h3`
  font-size: 34px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
`;
const Text = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: "Fira Mono", Menlo, monospace;
  line-height: 1.5;
`;
