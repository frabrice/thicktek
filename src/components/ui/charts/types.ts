export interface ChartProps {
  /** The data to be displayed in the chart */
  data: Array<Record<string, any>>;
  /** The key to use for the X axis values */
  xKey?: string;
  /** The key to use for the Y axis values */
  yKey?: string;
  /** The height of the chart in pixels */
  height?: number;
}