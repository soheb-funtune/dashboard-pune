import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
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
  datasets: data,
});

export const PieChart = ({ data }) => {
  return <Pie className="pie-chart" options={options} data={dataFun(data)} />;
};
