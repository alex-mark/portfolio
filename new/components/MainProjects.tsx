import styled from "@emotion/styled";
import React from "react";

interface ProjectCardProps {}

const MainProjects = ({}) => {
  return (
    <Container>
      <ProjectWrapper>
        {/* Add preview or logo */}
        {/* Add link */}
        <h2>Thinc</h2>
        <p>Collaborative knowledge management tool</p>
        {/* Switch to chips */}
        <p>Beta is coming soon.</p>
      </ProjectWrapper>

      <ProjectWrapper>
        {/* Add preview or logo */}
        {/* Add link */}
        <h2>Winemap.me</h2>
        <p>Technology demonstrator that turned into real product.</p>
        <p>
          If you happened to be in Moscow – find a good place to enjoy some
          wine.
        </p>
        {/* Switch to chips */}
        <p>
          Under the hood: React, Next.js, Apollo GraphQL, TypeScript, TypeOrm,
          PostgreSQL.
        </p>
      </ProjectWrapper>
    </Container>
  );
};

export default MainProjects;

const Container = styled.div`
  margin: 48px;
`;

const ProjectWrapper = styled.div`
  margin-bottom: 30px;
`;
