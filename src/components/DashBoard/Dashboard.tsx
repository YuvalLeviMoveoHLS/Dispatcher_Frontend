import React from "react";
import { DashboardContainer } from "./Dashboard.style";
import PieGraph from "./PieGraph";
const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <PieGraph />
      <PieGraph />
    </DashboardContainer>
  );
};

export default Dashboard;
