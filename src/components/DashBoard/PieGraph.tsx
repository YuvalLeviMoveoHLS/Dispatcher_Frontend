import React, { FC, useMemo } from "react";
import styled from "styled-components";
import {
  StyledPieGraphContainer,
  StyledHeader,
  StyledLine,
  StyledHeaderContainer,
} from "./PieGraph.style";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
//import { ColorsArray } from "../../mockData/DashboardMockData";
import { ISourceNameAndValue } from "../../models/SourceNameAndValueInterface";
import PieGraphList from "./PieGraphList";
import { COLORS } from "../../utils/constants/Colors";
import CustomLabel from "./CustomLabel";

interface PieGraphProps {
  data: { totalArticles: number; sources: ISourceNameAndValue[] };
}

const PieGraph: FC<PieGraphProps> = ({ data }) => {
  const ColorsArray = COLORS.pie;
  const { totalArticles, sources } = data;
  // const totalSum = useMemo(
  //   () => sources.reduce((acc, cur) => acc + cur.value, 0),
  //   []
  // );
  const topFourSources = useMemo(
    () => [...sources].sort((a, b) => b.value - a.value).slice(0, 4),
    [sources]
  );
  return (
    <StyledPieGraphContainer>
      <StyledHeaderContainer>
        <StyledHeader>Sources</StyledHeader>
        <StyledLine />
      </StyledHeaderContainer>
      <div style={{ height: "140px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={topFourSources}
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {sources.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={ColorsArray[index % ColorsArray.length]}
                />
              ))}
              <Label value={totalArticles} position="center" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <PieGraphList
          sources={topFourSources}
          colors={ColorsArray}
          totalSum={totalArticles}
        />
      </div>
    </StyledPieGraphContainer>
  );
};

export default PieGraph;
