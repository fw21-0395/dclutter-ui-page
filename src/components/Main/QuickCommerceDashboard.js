"use client";

import React from "react";
import DashboardHeader from "./DashboardHeader";
import BrandSelector from "./BrandSelector";
import MetricsCard from "./MetricsCard";
import DataTable from "./DataTable";

const QuickCommerceDashboard = () => {
  const columns = [
    { id: "name", label: "SKU Name", type: "text" },
    { id: "sales", label: "Sales", type: "currency" },
    { id: "outOfStock", label: "Out of Stock", type: "percentage" },
    { id: "totalInventory", label: "Total Inventory", type: "number" },
    { id: "avgRank", label: "Average Rank", type: "number" },
    { id: "estTraffic", label: "Est. Traffic", type: "number" },
    { id: "estImpressions", label: "Est. Impressions", type: "number" },
    { id: "conversionRate", label: "CR", type: "percentage" },
  ];

  const salesLineData = [
    { name: "09", thisMonth: 287, lastMonth: 72 },
    { name: "10", thisMonth: 93, lastMonth: 321 },
    { name: "11", thisMonth: 434, lastMonth: 150 },
    { name: "12", thisMonth: 67, lastMonth: 402 },
    { name: "13", thisMonth: 202, lastMonth: 98 },
    { name: "14", thisMonth: 135, lastMonth: 267 },
    { name: "15", thisMonth: 391, lastMonth: 87 },
  ];

  const totalSoldLineData = [
    { name: "09", thisMonth: 12, lastMonth: 8 },
    { name: "10", thisMonth: 4, lastMonth: 13 },
    { name: "11", thisMonth: 9, lastMonth: 7 },
    { name: "12", thisMonth: 5, lastMonth: 11 },
    { name: "13", thisMonth: 8, lastMonth: 12 },
    { name: "14", thisMonth: 3, lastMonth: 16 },
    { name: "15", thisMonth: 10, lastMonth: 6 },
  ];

  const pieData = [
    { name: "New Delhi", value: "26.5L", change: 1.2, color: "#5B4FF9" },
    { name: "Mumbai", value: "36.4L", change: -3.3, color: "#FF5C5C" },
    { name: "West Bengal", value: "12.2L", change: -2.3, color: "#FFC75C" },
    { name: "Others", value: "24.3L", change: 1.09, color: "#E2E8F0" },
  ];

  return (
    <div className=" w-full  shrink-0 border bg-[#FAFAFA] rounded-[10px] border-solid border-[#EBEBEB] overflow-hidden ">
      <DashboardHeader title="Quick Commerce" />
      <BrandSelector />

      <div className="p-6">
        <div className="grid grid-cols-3 gap-6 mb-8 ">
          <MetricsCard
            title="Sales (MRP)"
            value="115.32"
            percentChange={6.4}
            previousValue="119.69"
            chartType="line"
            lineData={salesLineData}
          />

          <MetricsCard
            title="Total Quantity Sold"
            value="157.49"
            percentChange={-1.4}
            previousValue="98.69"
            chartType="line"
            lineData={totalSoldLineData}
          />

          <MetricsCard title="Top Cities" chartType="pie" pieData={pieData} />
        </div>

        <div className="w-full">
          <div className="mb-8">
            <DataTable tableType="sku" />
          </div>

          <div className="w-full">
            <DataTable tableType="city" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickCommerceDashboard;
