import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function IssueStatusChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Open", "In-Progress", "Closed"],
      datasets: [
        {
          label: "Issue Status",
          data: [20, 12, 7],
          backgroundColor: ["#FF0000", "#000080", "#008000"],
          borderColor: ["#FF0000", "#000080", "#008000"],
          borderWidth: 0,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
