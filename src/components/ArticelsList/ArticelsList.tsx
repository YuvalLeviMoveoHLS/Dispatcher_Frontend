import React, { ReactNode } from "react";
import { Article } from "../../models/ArticleInterface";
import { ArticlesContainer } from "./ArticelsList.style";
import ArticleCard from "../Article/ArticleCard";
import articlesMock from "../../mockData/Articles.json";

const ArticelsList: React.FC = () => {
  let atricleList: Article[] = articlesMock.articles;

  return (
    <ArticlesContainer>
      {atricleList.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </ArticlesContainer>
  );
};

export default ArticelsList;
