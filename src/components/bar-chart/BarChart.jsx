import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./bar-chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = (titleText) => ({
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
  scales: {
    y: {
      title: {
        display: true,
        text: titleText || "Performance Index",
      },
      beginAtZero: true,
      grace: 50,
      min: 0,
      // max: 100,
      ticks: {
        stepSize: 5, // Set the default step size or use the provided value
      },
    },
  },
});

const labels = ["E4v54", "E4v19", "T4616"];

const dataFun = (data) => ({
  labels,
  datasets: data,
});

export const BarChart = ({ data, titleText }) => {
  data && console.log({ data });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        // minHeight: "275px",
      }}
    >
      <Bar
        className="chart-js"
        options={options(titleText)}
        data={dataFun(data)}
      />
    </div>
  );
};
