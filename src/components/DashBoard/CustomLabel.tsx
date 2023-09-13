interface ICustomLabelProps {
  viewBox: {
    cx: number;
    cy: number;
  };
  totalArticles: number;
}

const CustomLabel: React.FC<ICustomLabelProps> = ({
  viewBox,
  totalArticles,
}) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill="#3d3d3d"
      className="recharts-text recharts-label"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan x={cx} dy={-40}>
        {totalArticles}
      </tspan>
      <tspan x={cx} dy={20}>
        Articles
      </tspan>
    </text>
  );
};

export default CustomLabel;
