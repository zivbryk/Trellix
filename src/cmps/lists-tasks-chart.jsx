import { Doughnut } from "react-chartjs-2";

export function ListsTasksChart({ tasksPerListData }) {
  const data = {
    labels: Object.keys(tasksPerListData),
    datasets: [
      {
        label: "# of Toys By Label",
        data: Object.values(tasksPerListData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(204, 180, 169, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(204, 180, 169, 1)",
        ],
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
        position: "left",
      },
      title: {
        display: true,
        align: "start",
        text: "Tasks by List",
        padding: {
          top: 10,
          bottom: -35,
        },
        font: {
          size: 20,
          family:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
        },
        color: "#ffffff",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
