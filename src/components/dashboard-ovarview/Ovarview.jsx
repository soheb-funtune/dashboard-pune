import React, { useEffect, useState } from "react";
import "./overview.css";
import Card from "../Card/card";
import { PieChart } from "../pie-chart/PieChart";
import { BarChart } from "../bar-chart/BarChart";
import { DoughnutChart } from "../doughnut-chart/DoughnutChart";
// import AllProjects from "../all-projects-card/AllProjects";
import { faker } from "@faker-js/faker";

const pieChartD = [
  {
    label: "",
    data: Array.from({ length: 3 })?.map(() => faker.number.int(1000)),
    backgroundColor: ["green", "yellow", "red"],
    borderColor: ["green", "yellow", "red"],
    borderWidth: 1,
  },
];
const firstBarD = [
  {
    label: "",
    data: Array.from({ length: 5 })?.map(() => faker.number.int(1000)),
    backgroundColor: "rgba(27, 248, 7, 0.959)",
    barThickness: 20,
  },
];
const Ovarview = () => {
  const [allData, setAllData] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const handleData = () => {
    const pieChartData = [
      {
        label: "",
        data: Array.from({ length: 3 })?.map(() => faker.number.int(1000)),
        backgroundColor: ["green", "yellow", "red"],
        borderColor: ["green", "yellow", "red"],
        borderWidth: 1,
      },
    ];
    const firstBar = [
      {
        label: "",
        data: Array.from({ length: 5 })?.map(() => faker.number.int(1000)),
        backgroundColor: "rgba(27, 248, 7, 0.959)",
        barThickness: 20,
      },
    ];
    const secondBarData = [
      {
        label: "",
        data: Array.from({ length: 4 })?.map(() => faker.number.int(1000)),
        backgroundColor: "rgba(27, 248, 7, 0.959)",
        barThickness: 20,
      },
      {
        label: "",
        data: Array.from({ length: 4 })?.map(() => faker.number.int(1000)),
        backgroundColor: "rgba(221, 55, 5, 0.959)",
        barThickness: 20,
      },
    ];
    const multiBarData = [
      {
        label: "Original Contract Amount",
        data: Array.from({ length: 4 })?.map(() => faker.number.int(1000)),
        backgroundColor: "rgba(38, 88, 33, 0.959)",
        barThickness: 10,
      },
      {
        label: "Present Contract Amount",
        data: Array.from({ length: 4 }).map(() => faker.number.int(1000)),
        backgroundColor: "rgba(92, 45, 30, 0.959)",
        barThickness: 10,
      },
      {
        label: "Amount Billed to Date",
        data: Array.from({ length: 4 }).map(() => faker.number.int(1000)),
        backgroundColor: "rgba(63, 61, 60, 0.959)",
        barThickness: 10,
      },
    ];

    setAllData({ pieChartData, firstBar, secondBarData, multiBarData });
  };
  useEffect(() => {
    if (selectedDate) {
      handleData();
    }
  }, [selectedDate]);
  console.log({ allData });
  return (
    <div>
      <input
        className="date-input"
        type="month"
        defaultValue={`${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }`}
        value={selectedDate}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedDate(e.target.value);
        }}
      />
      <div style={{ marginBottom: "20px" }} className="overview-wrapper">
        <Card heading={"Contracts"}>
          <PieChart data={allData?.pieChartData || pieChartD} />
        </Card>
        <Card heading={"Project Completion Rate"}>
          <DoughnutChart data={allData?.pieChartData || pieChartD} />
        </Card>
        <Card heading={"High Performing Projects"}>
          <BarChart data={allData?.firstBar || firstBarD} />
        </Card>
        <Card heading={"Low Performing Projects"}>
          <BarChart data={allData?.secondBarData || firstBarD} />
        </Card>
        <Card heading={""}>
          <BarChart
            titleText={"Amount in $"}
            data={allData?.multiBarData || firstBarD}
          />
        </Card>
      </div>
      <Card heading={"All Projects"}>
        I don't have GOOGLE DEVELOPER CONSOLE account so i can't implement map
        if you have provide me API-KEY i will implement
        {/* <AllProjects /> */}
      </Card>
    </div>
  );
};

export default Ovarview;
