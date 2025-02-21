import { LineChart as RechartsLineChart, Line, CartesianGrid, Tooltip } from 'recharts';
import { ChartContainer } from './components/chart-container';
import { ChartTooltip } from './components/chart-tooltip';
import { ChartAxes } from './components/chart-axes';

interface LineChartProps {
  data: Array<Record<string, any>>;
  height?: number;
}

export function LineChart({ data, height = 300 }: LineChartProps) {
  return (
    <ChartContainer height={height}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <ChartAxes />
        <Tooltip content={<ChartTooltip />} />
        <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
      </RechartsLineChart>
    </ChartContainer>
  );
}