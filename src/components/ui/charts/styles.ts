export const chartStyles = {
  gridStyle: {
    strokeDasharray: "3 3",
    stroke: "hsl(var(--muted))"
  },
  axisStyle: {
    stroke: "hsl(var(--muted-foreground))",
    tick: { fill: "hsl(var(--muted-foreground))" }
  },
  tooltipStyle: {
    contentStyle: {
      backgroundColor: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "var(--radius)"
    },
    labelStyle: { 
      color: "hsl(var(--foreground))" 
    }
  }
};