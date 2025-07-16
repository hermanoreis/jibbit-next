import { AreaChartComponent } from "./area-chart";
import { BarChartComponent } from "./bar-chart";
import { PieChartComponent } from "./pie-chart";

export const chart = {
  name: "chart",
  components: {
    BarChart: <BarChartComponent />,
    AreaChart: <AreaChartComponent />,
    PieChart: <PieChartComponent />,
  },
};
