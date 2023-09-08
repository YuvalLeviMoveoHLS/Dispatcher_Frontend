import React, { useEffect, useState } from "react";
import { COLORS } from "../../utils/constants/Colors";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  StyledLineGraphContainer,
  StyledHeader,
  StyledHeaderContainer,
  StyledLine,
} from "./LineChart.style";
import { generateSortedData } from "../../helpers/helpers";
import { Article } from "../../models/ArticleInterface";
import { CustomAreaChart } from "./CustomAreaChart";

interface LineChartProps {
  articles: Article[];
}
const LineChart: React.FC<LineChartProps> = ({ articles }) => {
  const [data, setData] = useState<{ name: string; val: number }[]>([]);

  useEffect(() => {
    const sortedData = generateSortedData(articles);
    setData(sortedData);
  }, [articles]);

  return (
    <StyledLineGraphContainer>
      <StyledHeaderContainer>
        <StyledHeader>Dates</StyledHeader>
        <StyledLine />
      </StyledHeaderContainer>
      <ResponsiveContainer>
        <CustomAreaChart data={data} />
      </ResponsiveContainer>
    </StyledLineGraphContainer>
  );
};

export default LineChart;
