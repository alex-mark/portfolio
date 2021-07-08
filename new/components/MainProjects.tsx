import styled from "@emotion/styled";
import React from "react";

interface ProjectCardProps {}

const MainProjects = ({}) => {
  return (
    <Container>
      <ProjectWrapper>
        {/* Add preview or logo */}
        {/* Add link */}
        <Header>Thinc</Header>
        <Text>Collaborative knowledge management tool</Text>
        {/* Switch to chips */}
        <Text>Beta is coming soon.</Text>
      </ProjectWrapper>

      <ProjectWrapper>
        {/* Add preview or logo */}
        {/* Add link */}
        <Header>Winemap.me</Header>
        <Text>Technology demonstrator that turned into real product.</Text>
        <Text>
          If you happened to be in Moscow – find a good place to enjoy some
          wine.
        </Text>
        {/* Switch to chips */}
        <Text>
          Under the hood: React, Next.js, Apollo GraphQL, TypeScript, TypeOrm,
          PostgreSQL.
        </Text>
      </ProjectWrapper>
    </Container>
  );
};

export default MainProjects;

const Container = styled.div`
  padding: 48px;
  border-bottom: 1px solid #ddd;
`;

const ProjectWrapper = styled.div`
  margin-bottom: 30px;
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
`;
