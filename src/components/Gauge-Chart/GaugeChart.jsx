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
      data: [80, 12],
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
          return "gray";
        }
      },
      borderColor: "white", // ["red", "green", "blue"],
      circumference: 180, // it is used to make Half Circle
      rotation: 270, // used to rotate Half Circle
      cutout: "90%", // is cut the width of Bar by 90%
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
export const GaugeChart = () => {
  const chartRef = useRef();
  const gaugeChartText = {
    id: "gaugeChartText",
    afterDatasetsDraw(chart, args, pluginsOptions) {
      const {
        ctx,
        data,
        chartArea: { top, right, bottom, left, width, height },
        scales: { r },
      } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const score = data?.datasets?.[0]?.data[0];
      const score1 = data?.datasets?.[0]?.data[1];
      // center value
      ctx.font = "100px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseLine = "top";
      ctx.fillText(score, xCoor, yCoor);
      // center value
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseLine = "top";
      ctx.fillText(`${(score / (score + score1)) * 100}%`, xCoor, yCoor - 80);

      ctx.fillRect(xCoor, yCoor, 400, 1);
      //   left value
      ctx.font = "15px sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseLine = "bottom";
      ctx.fillText(
        `${Math.round((score / (score + score1)) * 100)}%`,
        left,
        yCoor + 20
      );
      // right value
      ctx.font = "15px sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseLine = "bottom";
      ctx.fillText(
        `${Math.round((score1 / (score + score1)) * 100)}%`,
        right,
        yCoor + 20
      );
    },
  };

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
        plugins={[gaugeChartText]}
        options={options}
      />
    </div>
  );
};
