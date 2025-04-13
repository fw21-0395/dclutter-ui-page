import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const DonutChart = () => {
  // Sample data based on the image
  const chartData = [
    {
      name: "New Delhi",
      value: 35,
      amount: "₹26.5L",
      change: 1.2,
      color: "#7B66FF",
    },
    {
      name: "Mumbai",
      value: 23,
      amount: "₹36.4L",
      change: -3.3,
      color: "#F87171",
    },
    {
      name: "West Bengal",
      value: 21,
      amount: "₹12.2L",
      change: -2.3,
      color: "#FAC858",
    },
    {
      name: "Others",
      value: 9,
      amount: "₹24.3L",
      change: 1.09,
      color: "#E5E7EB",
    },
  ];

  const totalAmount = "₹68.2L";
  const totalChange = 2.2;

  return (
    <div className="flex flex-col w-full">
      {/* Using custom heights to display only half of the chart */}
      <div className="relative h-32 w-full mb-4 overflow-hidden">
        {/* Using a taller container but hiding the bottom half */}
        <div className="absolute h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                startAngle={180}
                endAngle={0}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    strokeWidth={0}
                  />
                ))}
              </Pie>

              {/* Center text - correctly implemented */}
              <text
                x="50%"
                y="33%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#7D7D7E"
                fontSize="13"
                fontWeight="normal"
              >
                Total
              </text>
              <text
                x="50%"
                y="40%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#000000"
                fontSize="18"
                fontWeight="bold"
              >
                {totalAmount}
              </text>
              <text
                x="50%"
                y="47%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#1D874F"
                fontSize="13"
                fontWeight="medium"
              >
                ↑ {totalChange}%
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend - now positioned below the chart */}
      <div className="w-full space-y-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs text-gray-700">{item.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold">{item.amount}</span>
              <span className="text-xs text-gray-400">{item.value}%</span>
              <span
                className={`text-xs ${
                  item.change > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
