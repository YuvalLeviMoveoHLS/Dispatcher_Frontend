import React, { FC, useMemo } from "react";
import styled from "styled-components";
import {
  StyledPieGraphContainer,
  StyledHeader,
  StyledLine,
  StyledListItem,
  StyledDot,
  StyledSpan,
  StyledList,
  StyledHeaderContainer,
} from "./PieGraph.style";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import { ColorsArray, SourcesArray } from "../../mockData/DashboardMockData";

interface PieGraphProps {}

const PieGraph: FC<PieGraphProps> = () => {
  const totalSum = useMemo(
    () => SourcesArray.reduce((acc, cur) => acc + cur.value, 0),
    []
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
              data={SourcesArray}
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {SourcesArray.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={ColorsArray[index % ColorsArray.length]}
                />
              ))}
              <Label value={totalSum} position="center" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <StyledList>
          {SourcesArray.map((entry, index) => {
            const percentage = Math.floor((entry.value / totalSum) * 100);
            return (
              <StyledListItem key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledDot color={ColorsArray[index % ColorsArray.length]} />
                  <StyledSpan>{entry.name}</StyledSpan>
                </div>
                <StyledSpan>{percentage}%</StyledSpan>
              </StyledListItem>
            );
          })}
        </StyledList>
      </div>
    </StyledPieGraphContainer>
  );
};

export default PieGraph;
