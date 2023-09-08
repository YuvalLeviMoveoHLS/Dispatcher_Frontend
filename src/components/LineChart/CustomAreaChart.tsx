import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import { COLORS } from "../../utils/constants/Colors";
interface DataItem {
  name: string;
  val: number;
}

interface CustomAreaChartProps {
  data: DataItem[];
}

export const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ data }) => (
  <AreaChart
    width={280}
    height={260}
    data={data}
    margin={{ top: 50, right: 20, left: -40, bottom: 10 }}
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
      tickMargin={4}
      axisLine={false}
      tickLine={false}
      tick={({ x, y, payload }) => {
        return (
          <text
            x={x}
            y={y}
            dy={12}
            textAnchor="middle"
            fill={COLORS.purple}
            fontFamily="Roboto-Regular, sans-serif"
            fontSize={12}
          >
            {payload.value}
          </text>
        );
      }}
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
);
