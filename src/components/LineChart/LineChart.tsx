import React from "react";
import { COLORS } from "../../utils/constants/Colors";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  StyledLineGraphContainer,
  StyledHeader,
  StyledHeaderContainer,
  StyledLine,
} from "./LineChart.style";
const data = [
  {
    name: "MAR",
    val: 50,
  },
  {
    name: "APR",
    val: 20,
  },
  {
    name: "JUN",
    val: 20,
  },
  {
    name: "JUL",
    val: 30,
  },
  {
    name: "AUG",
    val: 40,
  },
];
const LineChart: React.FC = () => {
  return (
    <StyledLineGraphContainer>
      <StyledHeaderContainer>
        <StyledHeader>Dates</StyledHeader>
        <StyledLine />
      </StyledHeaderContainer>
      <ResponsiveContainer>
        <AreaChart
          width={280}
          height={260}
          data={data}
          margin={{
            top: 50,
            right: 20,
            left: -40,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor={COLORS.primary} stopOpacity={0.3} />
              <stop offset="100%" stopColor={COLORS.white} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            fontFamily="Roboto-Regular, sans-serif"
            fontSize={12}
            tickMargin={4}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tickLine={false} tick={false} axisLine={false} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="val"
            stroke={COLORS.primary}
            fill="url(#colorUv)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledLineGraphContainer>
  );
};

export default LineChart;
