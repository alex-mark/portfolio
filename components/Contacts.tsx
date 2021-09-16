import styled from "@emotion/styled";
import Link from "@material-ui/core/Link";
import React from "react";

interface ContactsProps {}

const Contacts = ({}) => {
  return (
    <Container>
      <Header>Want to get in touch?</Header>
      <Text>
        Send me an email at{" "}
        <Link type="email" href="mailto:alex@alexmarkin.com">
          alex@alexmarkin.com
        </Link>
      </Text>
      <SecondaryText>© 2021 Alex Markin</SecondaryText>
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 48px 15px 48px;
  border-top: 1px solid #ddd;
`;
const Header = styled.h3`
  font-size: 40px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 1rem;
  font-family: "Fira Mono", Menlo, monospace;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 70px;
`;
const SecondaryText = styled.p`
  font-size: 0.875rem;
  font-family: "Fira Mono", Menlo, monospace;
  font-weight: 500;
  line-height: 1.57;
`;
