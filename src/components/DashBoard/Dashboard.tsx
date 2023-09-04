import React from "react";
import { DashboardContainer } from "./Dashboard.style";
import PieGraph from "./PieGraph";
import { ISourceNameAndValue } from "../../models/SourceNameAndValueInterface";

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
      <PieGraph data={data} />
    </DashboardContainer>
  );
};

export default Dashboard;
