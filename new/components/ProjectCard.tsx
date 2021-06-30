import React from "react";

interface ProjectCardProps {}

const ProjectCard = ({}) => {
  return (
    <div>
      {/* Add preview or logo */}
      {/* Add link */}
      <h2>Winemap.me</h2>
      <p>Technology demonstrator that turned into real product.</p>
      <p>
        If you happened to be in Moscow – find a good place to enjoy some wine.
      </p>
      {/* Switch to chips */}
      <p>
        Under the hood: React, Next.js, Apollo GraphQL, TypeScript, TypeOrm,
        PostgreSQL.
      </p>
    </div>
  );
};

export default ProjectCard;
