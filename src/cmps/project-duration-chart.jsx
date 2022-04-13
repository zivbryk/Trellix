import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export function ProjectDurationChart({ durationData }) {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Time passed",
        // data: [508 / 7],
        data: [durationData[1]],
        backgroundColor: ["rgba(54, 162, 235, 0.3)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        borderSkipped: "middle",
      },
      {
        label: "Time Left",
        // data: [60 / 7],
        data: [durationData[0]],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 15,
            family:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
          },
          boxWidth: 15,
          boxHeight: 15,
          padding: 20,
        },
        align: "end",
      },
      title: {
        display: true,
        align: "middle",
        text: "Project Progress",
        font: {
          size: 20,
          family:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
        },
        color: "#ffffff",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      yAxes: {
        stacked: true,
        title: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          color: "#ffffff",
        },
      },
      xAxes: {
        stacked: true,
        title: {
          display: true,
          text: "Time [weeks]",
          font: {
            size: 15,
            family:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
          },
          color: "#ffffff",
        },
        ticks: {
          beginAtZero: true,
          color: "#ffffff",
        },
      },
    },
    // maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
}
