import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataFun = (data) => ({
  labels: ["Red", "Blue", "Yellow"],
  datasets: data,
});

export const options = () => ({
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "black", // Set the text color of legend labels
        usePointStyle: true, // Use a small point as legend symbol
      },
    },
    title: {
      display: false,
      // text: "Chart.js Bar Chart",
    },
  },
});

export const DoughnutChart = ({ data }) => {
  return (
    <Doughnut
      className="doughnut-chart"
      data={dataFun(data)}
      options={options()}
    />
  );
};