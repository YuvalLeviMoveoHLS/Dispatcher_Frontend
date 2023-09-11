import React, { ReactNode } from "react";
import { Article } from "../../models/ArticleInterface";
import { ArticlesContainer } from "./ArticelsList.style";
import ArticleCard from "../Article/ArticleCard";
import articlesMock from "../../mockData/Articles.json";

interface IArticelsListProps {
  atricleList: Article[];
}
const ArticelsList: React.FC<IArticelsListProps> = ({ atricleList }) => {

  return (
    <ArticlesContainer>
      {atricleList.map(
        (article, index) =>
          article.title !== "[Removed]" && (
            <ArticleCard article={article} key={index} />
          )
      )}
    </ArticlesContainer>
  );
};

export default ArticelsList;
