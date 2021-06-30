import styled from "@emotion/styled";
import React from "react";
import SocialButtons from "./SocialButtons";

interface HeadingProps {}

const Heading = ({}) => {
  return (
    <Container>
      <Text>{"I'm Alex Markin, and I like to"}</Text>
      <Header>build + design</Header>
      <SocialButtons style={{ marginTop: "15px" }} />
      {/* <p>
        I build websites and apps, often with React/Next.js, React Native, and
        TypeScript.
      </p> */}
    </Container>
  );
};

export default Heading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  padding: 50px;
  background-image: linear-gradient(to bottom right, slategrey, black);
  color: white;
`;
const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Fira Mono", Menlo, monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const Header = styled.h1`
  font-size: 6rem;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1;
`;
