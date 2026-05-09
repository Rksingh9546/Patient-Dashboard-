import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function BloodPressureChart({ data }) {

  const labels = data?.map(
    (item) =>
      `${item.month.slice(0, 3)}, ${item.year}`
  );

  const systolic = data?.map(
    (item) =>
      item.blood_pressure.systolic.value
  );

  const diastolic = data?.map(
    (item) =>
      item.blood_pressure.diastolic.value
  );

  const chartData = {

    labels,

    datasets: [

      {
        label: "Systolic",
        data: systolic,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5,
      },

      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {

    responsive: true,

    plugins: {

      legend: {
        position: "top",
      },
    },

    scales: {

      y: {
        min: 60,
        max: 180,
      },
    },
  };

  return (

    <div className="chart-container">

      <Line
        data={chartData}
        options={options}
      />

    </div>
  );
}

export default BloodPressureChart;