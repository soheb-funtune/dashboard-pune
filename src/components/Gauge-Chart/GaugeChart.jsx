import { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut, getElementsAtEvent } from "react-chartjs-2";

ChartJS.register({
  ArcElement,
  Tooltip,
  Legend,
});

const getGradient = (chart) => {
  const {
    ctx,
    chartArea: { top, left, bottom, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradientSegment.addColorStop(0, "red");
  gradientSegment.addColorStop(0.5, "orange");
  gradientSegment.addColorStop(1, "green");
  return gradientSegment;
};

const data = {
  labels: ["Yes", "No"],
  datasets: [
    {
      label: "First DataSet",
      data: [20, 100, 12],
      backgroundColor: (context) => {
        const chart = context?.chart;
        const { ctx, chartArea } = chart;
        console.log({ ctx, chartArea });
        if (!chartArea) {
          return null;
        }
        if (context?.index == 0) {
          return getGradient(chart);
        } else {
          return "black";
        }
      },
      borderColor: "none", // ["red", "green", "blue"],
      circumference: 180, // it is used to make Half Circle
      rotation: 270, // used to rotate Half Circle
    },
  ],
};
const options = {};
export const GaugeChart = () => {
  const chartRef = useRef();

  // showing alert on onClick of Area of Pie chart
  const handleClick = (e) => {
    // console.log(
    //   "chartFef:",
    //   chartRef.current,
    //   "getElementsAtEvent",
    //   getElementsAtEvent(chartRef.current, e)
    // );
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
      <Doughnut
        onClick={handleClick}
        ref={chartRef}
        data={data}
        options={options}
      />
    </div>
  );
};
