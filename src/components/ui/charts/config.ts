export const chartConfig = {
  margin: { top: 10, right: 10, left: 10, bottom: 10 },
  styles: {
    grid: {
      strokeDasharray: "3 3",
      stroke: "hsl(var(--muted))"
    },
    axis: {
      stroke: "hsl(var(--muted-foreground))",
      tick: { fill: "hsl(var(--muted-foreground))" },
      line: { stroke: "hsl(var(--border))" }
    },
    tooltip: {
      content: {
        backgroundColor: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)"
      },
      label: { color: "hsl(var(--foreground))" }
    },
    primary: "hsl(var(--primary))"
  }
} as const;