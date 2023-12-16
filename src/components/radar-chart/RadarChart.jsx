import { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

import { Radar, getElementsAtEvent } from "react-chartjs-2";

ChartJS.register({
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
});

const data = {
  labels: ["jan", "feb", "march"],
  datasets: [
    {
      label: "First DataSet",
      data: [20, 100, 12],
      backgroundColor: "red",
      borderColor: "black",
    },
  ],
};
const options = {};
export const RadarChart = () => {
  const chartRef = useRef();

  // showing alert on onClick of Area of Pie chart
  const handleClick = (e) => {
    if (getElementsAtEvent(chartRef.current, e)?.length > 0) {
      const dataSetIndex = getElementsAtEvent(chartRef.current, e)?.[0]
        ?.datasetIndex;
      const dataIndex = getElementsAtEvent(chartRef.current, e)?.[0]?.index;
      console.log({ dataSetIndex, dataIndex });
      alert(data?.labels?.[dataIndex]);
    }
  };
  return (
    <div>
      <Radar
        onClick={handleClick}
        ref={chartRef}
        data={data}
        options={options}
      />
    </div>
  );
};
