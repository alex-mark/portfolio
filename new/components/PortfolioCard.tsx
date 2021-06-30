import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  style?: React.CSSProperties;
}

const PortfolioCard = ({
  title,
  description,
  image,
  url,
  style,
}: PortfolioCardProps) => {
  return (
    <Card style={style}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="230"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
