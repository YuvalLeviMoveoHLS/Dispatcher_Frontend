import React from "react";
import { DashboardContainer } from "./Dashboard.style";
import PieGraph from "./PieGraph";
import { ISourceNameAndValue } from "../../models/SourceNameAndValueInterface";
import LineChart from "../LineChart/LineChart";
import { Article } from "../../models/ArticleInterface";

interface DashboardProps {
  data: {
    totalArticles: number;
    sources: ISourceNameAndValue[];
  };
  articles: Article[];
}

const Dashboard: React.FC<DashboardProps> = ({ data, articles }) => {
  return (
    <DashboardContainer>
      <PieGraph data={data} />
      <LineChart articles={articles} />
    </DashboardContainer>
  );
};

export default Dashboard;
