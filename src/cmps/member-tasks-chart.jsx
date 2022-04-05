import { Bar } from "react-chartjs-2";

export function MemberTasksChart({ tasksPerMemberData }) {
  const data = {
    labels: Object.keys(tasksPerMemberData),
    datasets: [
      {
        label: "Done Tasks",
        data: Object.values(tasksPerMemberData).map((val) => val[0]),
        backgroundColor: ["rgba(54, 162, 235, 0.3)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        borderSkipped: "middle",
      },
      {
        label: "Open Tasks",
        data: Object.values(tasksPerMemberData).map((val) => val[1]),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
        },
        align: "end",
      },
      title: {
        display: true,
        align: "start",
        text: "Board Member Tasks",
        font: {
          size: 20,
          family:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
        },
        color: "#ffffff",
      },
    },
    scales: {
      yAxes: {
        stacked: true,
        title: {
          display: true,
          text: "Tasks",
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
      xAxes: {
        stacked: true,
        title: {
          display: true,
          text: "Board Members",
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
  };

  return <Bar data={data} options={options} />;
}
