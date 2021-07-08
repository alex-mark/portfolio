import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl: string;
  style?: React.CSSProperties;
}

const PortfolioCard = ({
  title,
  description,
  image,
  url,
  githubUrl,
  style,
}: PortfolioCardProps) => {
  return (
    <Card style={style}>
      <CardMedia image={image} title={title} style={{ height: 230 }} />

      <CardContent style={{ paddingBottom: 0 }}>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ minHeight: "40px" }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions style={{ paddingTop: 0 }}>
        <IconButton aria-label="go to website" href={url}>
          <LanguageIcon />
        </IconButton>
        <IconButton aria-label="go to github" href={githubUrl}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
