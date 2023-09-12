import { SxProps } from "@mui/material";
import React, { ReactNode } from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StyledButton from "../Button/StyledButton";
import {
  ArticleWrapper,
  StyledImage,
  CardSx,
  DateAndSourceSharedSx,
  ArticleContentSx,
  ArticleTitleSx,
  CardActionsSx,
  CardContentSx,
} from "./ArticleCard.style";
import { Article } from "../../models/ArticleInterface";
import noDataImage from "../../assets/svg/noData.svg";
import { changeDateFormat } from "../../helpers/helpers";

type ArticleProps = {
  article: Article;
  sx?: SxProps;
  children?: ReactNode;
};

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  const { source, title, url, urlToImage, publishedAt, content } = article;

  const handleButtonClick = () => {
    window.open(url);
  };
  return (
    <ArticleWrapper>
      <StyledImage src={urlToImage || noDataImage} alt="Article" />
      <Card sx={CardSx}>
        <CardContent sx={CardContentSx}>
          <Typography sx={DateAndSourceSharedSx}>
            {changeDateFormat(publishedAt)}
          </Typography>
          <Typography sx={ArticleTitleSx}>{title}</Typography>
          <Typography sx={DateAndSourceSharedSx}>{source.name}</Typography>
          <Typography variant="body2" sx={ArticleContentSx}>
            {content}
          </Typography>
          <CardActions sx={CardActionsSx}>
            <StyledButton onClick={handleButtonClick}>
              Navigate to dispatch
            </StyledButton>
          </CardActions>
        </CardContent>
      </Card>
    </ArticleWrapper>
  );
};

export default ArticleCard;
