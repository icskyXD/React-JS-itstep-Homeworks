import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../hooks";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const StockInfoBarChart = () => {
  const productsData = useAppSelector((state) => state.products.data);

  const data = productsData[0] ? (
    <Bar
      data={{
        labels: productsData.map((pr) => pr.product_name),
        datasets: [
          {
            label: "Products quantity",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(0,0,255)",
            data: productsData.map((pr) => pr.product_amount),
          },
        ],
      }}
    />
  ) : null;
  return (
    <div>
      <h3>Product quantity graphics</h3>
      <div>{data}</div>
    </div>
  );
};

export default StockInfoBarChart;
