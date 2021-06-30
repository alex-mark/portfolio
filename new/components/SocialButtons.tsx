import styled from "@emotion/styled";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import { StravaIcon } from "./Icons";

interface SocialButtonsProps {
  style?: React.CSSProperties;
}

const socialData = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/alex-mark-in/",
    Icon: LinkedInIcon,
  },
  {
    name: "github",
    url: "https://github.com/alex-mark",
    Icon: GitHubIcon,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/alexandr.markin.9/",
    Icon: FacebookIcon,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/alexmark_in/",
    Icon: InstagramIcon,
  },
  {
    name: "strava",
    url: "https://www.strava.com/athletes/36414833",
    Icon: StravaIcon,
  },
];

const SocialButtons = ({ style }: SocialButtonsProps) => {
  return (
    <Row style={style}>
      <div style={{}}></div>
      {socialData.map((s, index) => (
        <a
          key={index}
          href={s.url}
          //  target="_blank" rel="noopener noreferrer"
        >
          <SocialButton color="inherit" aria-label={s.name}>
            <s.Icon style={{ fontSize: 40 }} />
          </SocialButton>
        </a>
      ))}
    </Row>
  );
};

export default SocialButtons;

const Row = styled.div`
  display: flex;
`;
const SocialButton = styled(IconButton)`
  color: #fff;
  &:hover {
    background-color: #888888;
  }
`;
