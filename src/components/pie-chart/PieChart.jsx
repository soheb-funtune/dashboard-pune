import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementsAtEvent } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  plugins: {
    datalabels: {
      display: true,
      color: "black",
    },
    tooltip: {
      titleFont: {
        size: 13,
      },
      bodyFont: {
        size: 10,
      },
    },
    legend: {
      display: true,
      responsive: true,
      position: "bottom",
      // labels: {
      //   boxWidth: 36,
      //   padding: 10,
      //   font: {
      //     size: 15,
      //   },
      // },
      align: "center",
    },
  },
};

export const dataFun = (data) => ({
  labels: ["Delayed Contract", "Average Contract", "On Time Contract"],
  datasets: [
    {
      ...data?.[0],
      dataLabels: ["Delayed Contract", "Average Contract", "On Time Contract"],
    },
  ],
});

export const PieChart = ({ data }) => {
  const chartRef = useRef();

  // showing alert on onClick of Area of Pie chart
  const handleClick = (e) => {
    if (getElementsAtEvent(chartRef.current, e)?.length > 0) {
      const dataSetIndex = getElementsAtEvent(chartRef.current, e)?.[0]
        ?.datasetIndex;
      const dataIndex = getElementsAtEvent(chartRef.current, e)?.[0]?.index;
      console.log({ dataSetIndex, dataIndex });
      alert(dataFun()?.datasets?.[dataSetIndex]?.dataLabels?.[dataIndex]);
    }
  };
  return (
    <Pie
      ref={chartRef}
      onClick={handleClick}
      className="chart-js"
      options={options}
      data={dataFun(data)}
    />
  );
};
