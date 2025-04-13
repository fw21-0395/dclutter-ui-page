"use client";

import React from "react";
import { Info } from "lucide-react";
import {
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Area,
} from "recharts";
import DonutChart from "./DonutChart";

const sampleLineData = [
  { name: "09", thisMonth: 2.0, lastMonth: 1.8 },
  { name: "10", thisMonth: 2.5, lastMonth: 2.0 },
  { name: "11", thisMonth: 2.2, lastMonth: 2.5 },
  { name: "12", thisMonth: 3.8, lastMonth: 2.8 },
  { name: "13", thisMonth: 2.8, lastMonth: 3.2 },
  { name: "14", thisMonth: 3.8, lastMonth: 2.8 },
  { name: "15", thisMonth: 4.5, lastMonth: 3.2 },
];

const MetricsCard = ({
  title,
  value,
  percentChange,
  previousValue,
  chartType,
  pieData,
  lineData,
}) => {
  const isPositiveChange = percentChange >= 0;
  const dataToRender = lineData ? lineData : sampleLineData;

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="p-4 flex justify-between items-start border-b border-gray-200">
        <div className="flex items-center gap-2 flex-row justify-between w-full ">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <Info size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        {chartType !== "pie" && (
          <div className="mb-2 flex flex-row justify-between w-full">
            <h2 className="text-2xl font-bold">{value}</h2>
            <div className="flex items-end gap-2 flex-col">
              <span
                className={`${
                  isPositiveChange ? "text-green-600" : "text-red-500"
                } text-sm`}
              >
                {isPositiveChange ? "↑" : "↓"} {Math.abs(percentChange)}%
              </span>
              <span className="text-gray-500 text-xs">
                vs {previousValue} last month
              </span>
            </div>
          </div>
        )}

        {chartType === "line" && (
          <div className="mt-4">
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={dataToRender}
                  margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#E5E7EB"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9CA3AF" }}
                    tickMargin={5}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#9CA3AF" }}
                    domain={[1.5, 6.0]}
                    ticks={[1.5, 3.0, 4.5, 6.0]}
                    width={25}
                    orientation="left"
                    tickFormatter={(value) => value}
                  />
                  <defs>
                    <linearGradient
                      id="colorThisMonth"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#1D874F" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#1D874F" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="thisMonth"
                    stroke="#1D874F"
                    strokeWidth={1}
                    fillOpacity={1}
                    fill="url(#colorThisMonth)"
                    dot={false}
                    activeDot={{
                      r: 4,
                      stroke: "#1D874F",
                      strokeWidth: 2,
                      fill: "white",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="lastMonth"
                    stroke="#F97316"
                    strokeWidth={1.5}
                    strokeDasharray="3 3"
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {chartType === "pie" && pieData && (
          <DonutChart
            data={pieData.map((item) => ({
              ...item,
              value: parseFloat(item.value),
            }))}
            centerText={{
              value: "₹68.2L",
              change: 2.2,
            }}
          />
        )}
      </div>

      {chartType === "line" && (
        <div className="border-t border-gray-200">
          <div className="p-4 flex justify-start gap-6">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#1D874F]"></div>
              <span className="text-xs text-gray-500">This Month</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span className="text-xs text-gray-500">Last Month</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsCard;
