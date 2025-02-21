import { TooltipProps } from 'recharts';
import { Card } from '@/components/ui/card';

type ChartTooltipProps = TooltipProps<number, string>;

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <Card className="p-2 shadow-lg border-none">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">
        {payload[0].value}
      </p>
    </Card>
  );
}