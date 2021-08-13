import styled from "@emotion/styled";
import React, { useRef } from "react";
import Typed from "typed.js";
import SocialButtons from "./SocialButtons";

interface HeadingProps {}

const typedOptions = {
  strings: [
    "build products",
    "test new ideas",
    "build webservices",
    "build apps",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
};

const Heading = ({}) => {
  const spanRef = useRef<HTMLElement>(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed>();

  React.useEffect(() => {
    if (!spanRef.current) return;
    // elRef refers to the <span> rendered below
    typed.current = new Typed(spanRef.current, typedOptions);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Text>{"I'm Alex Markin, and I like to"}</Text>
        {/* <div className="type-wrap">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div> */}
        <Header>
          <span ref={spanRef} />
        </Header>
        <SocialButtons style={{ marginTop: "15px" }} />
        {/* <p>
        I build websites and apps, often with React/Next.js, React Native, and
        TypeScript.
      </p> */}
      </Container>
    </Wrapper>
  );
};

export default Heading;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 50px;
  background-image: linear-gradient(to bottom right, slategrey, black);
  color: white;
`;
const Container = styled.div`
  width: 100%;
  max-width: 700px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Fira Mono", Menlo, monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Header = styled.h1`
  font-size: 5rem;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1;
  vertical-align: middle;
  min-height: 160px;
  margin-top: 15px;
`;
