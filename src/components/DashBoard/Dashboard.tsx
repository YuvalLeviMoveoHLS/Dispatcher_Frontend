import React from "react";
import { DashboardContainer } from "./Dashboard.style";
import PieGraph from "./PieGraph";
import { ISourceNameAndValue } from "../../models/SourceNameAndValueInterface";
import LineChart from "../LineChart/LineChart";
interface DashboardProps {
  data: {
    totalArticles: number;
    sources: ISourceNameAndValue[];
  };
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <DashboardContainer>
      <PieGraph data={data} />
      <LineChart />
    </DashboardContainer>
  );
};

export default Dashboard;
