import { BarChart as RechartsBarChart, Bar, CartesianGrid, Tooltip } from 'recharts';
import { ChartContainer } from './components/chart-container';
import { ChartTooltip } from './components/chart-tooltip';
import { ChartAxes } from './components/chart-axes';

interface BarChartProps {
  data: Array<Record<string, any>>;
  height?: number;
}

export function BarChart({ data, height = 300 }: BarChartProps) {
  return (
    <ChartContainer height={height}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <ChartAxes />
        <Tooltip content={<ChartTooltip />} />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ChartContainer>
  );
}