import { XAxis, YAxis } from 'recharts';

export function ChartAxes() {
  return (
    <>
      <XAxis
        dataKey="name"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}`}
      />
    </>
  );
}