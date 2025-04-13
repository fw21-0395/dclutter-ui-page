"use client";

import React, { useState } from "react";
import {
  tableData,
  totals,
  columns,
  cityTableData,
  cityTotals,
} from "./tableData";
import TableHeader from "../Table/TableHeader";
import { renderCellContent } from "../Table/CellRenderer";
import { ChevronDown, LineChart } from "lucide-react";

const FixedWidthScrollableTable = ({ tableType = "sku" }) => {
  const data = tableType === "city" ? cityTableData : tableData;
  const tableTotals = tableType === "city" ? cityTotals : totals;
  const adjustedColumns =
    tableType === "city"
      ? columns.map((col) =>
          col.id === "name" ? { ...col, label: "City Name" } : col
        )
      : columns;

  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([1, 2]);

  const availabilityColumns = adjustedColumns.filter(
    (col) => col.section === "Availability"
  );
  const visibilityColumns = adjustedColumns.filter(
    (col) => col.section === "Visibility"
  );

  const handleSelectRow = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const handleFilterClick = () => {
    console.log("Filter button clicked");
  };

  const cellRenderer = (column, row, columnId) => {
    const result = renderCellContent(column, row, columnId);
    return result.isReactNode ? result.content : result.content;
  };

  const checkboxStyle = `
    .custom-checkbox {
      accent-color: #027056;
    }
    
    /* Override Firefox specific styling */
    .custom-checkbox:checked {
      background-color: #027056 !important;
      border-color: #027056 !important;
    }
  `;

  return (
    <div className="w-full">
      <style>{checkboxStyle}</style>

      <TableHeader
        title={tableType === "city" ? "City level data" : "SKU level data"}
        description={
          tableType === "city"
            ? "Analytics for all your Cities"
            : "Analytics for all your SKUs"
        }
        onFilterClick={handleFilterClick}
      />

      <div className="w-full">
        <div
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          style={{ width: "1224px" }}
        >
          <div className="overflow-x-auto">
            <table
              className="w-full"
              style={{
                minWidth: "1800px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr className="border-b border-gray-200">
                  <th
                    className="px-4 py-3 w-64 sticky left-0 bg-white z-10 border-r border-gray-200"
                    rowSpan="2"
                  >
                    <div className="flex items-center">
                      <div className="text-[#013025] text-[15px] font-semibold leading-4 tracking-[-0.02px] flex items-center whitespace-nowrap">
                        <LineChart size={16} className="text-gray-500 mr-2" />
                        {tableType === "city" ? "City Name" : "SKU Name"}
                      </div>
                    </div>
                  </th>

                  <th
                    colSpan={availabilityColumns.length}
                    className="text-[#013025] text-[15px] font-semibold leading-4 tracking-[-0.02px] text-center px-4 py-3 border-r border-gray-200"
                  >
                    Availability
                  </th>
                  <th
                    colSpan={visibilityColumns.length}
                    className="text-[#013025] text-[15px] font-semibold leading-4 tracking-[-0.02px] text-center px-4 py-3"
                  >
                    Visibility
                  </th>
                </tr>

                <tr className="bg-white border-b border-gray-200">
                  {availabilityColumns.map((column, index) => (
                    <th
                      key={column.id}
                      className={`px-4 py-3 text-left ${
                        index === availabilityColumns.length - 1
                          ? "border-r border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-center cursor-pointer">
                        <span className="text-[#013025] text-[15px] font-semibold leading-4 tracking-[-0.02px] whitespace-nowrap">
                          {column.label}
                        </span>
                        <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                      </div>
                    </th>
                  ))}

                  {visibilityColumns.map((column) => (
                    <th key={column.id} className="px-4 py-3 text-left">
                      <div className="flex items-center cursor-pointer">
                        <span className="text-[#013025] text-[15px] font-semibold leading-4 tracking-[-0.02px] whitespace-nowrap">
                          {column.label}
                        </span>
                        <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-b border-gray-200 ${
                      selectedRows.includes(row.id)
                        ? "bg-[#F7F7F7]"
                        : "bg-white"
                    }`}
                  >
                    <td
                      className="px-4 py-4 sticky left-0 z-10 border-r border-gray-200"
                      style={{
                        backgroundColor: selectedRows.includes(row.id)
                          ? "#F7F7F7"
                          : "white",
                      }}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 focus:ring-green-500 custom-checkbox"
                          style={{
                            accentColor: "#027056",
                          }}
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleSelectRow(row.id)}
                        />
                        <span className="text-[#0A090B] text-[15px] font-semibold leading-4 tracking-[-0.02px] underline ml-3 whitespace-nowrap">
                          {row.name}
                        </span>
                      </div>
                    </td>

                    {availabilityColumns.map((column, index) => (
                      <td
                        key={column.id}
                        className={`px-4 py-4 text-sm text-gray-500 ${
                          index === availabilityColumns.length - 1
                            ? "border-r border-gray-200"
                            : ""
                        }`}
                      >
                        {cellRenderer(column, row, column.id)}
                      </td>
                    ))}

                    {visibilityColumns.map((column) => (
                      <td
                        key={column.id}
                        className="px-4 py-4 text-sm text-gray-500"
                      >
                        {cellRenderer(column, row, column.id)}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="bg-gray-50 font-medium">
                  <td className="text-[#0A090B] text-[15px] font-bold leading-4 tracking-[-0.02px] px-4 py-4 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                    Total
                  </td>

                  {availabilityColumns.map((column, index) => (
                    <td
                      key={column.id}
                      className={`px-4 py-4 text-[15px] font-bold leading-4 tracking-[-0.02px] ${
                        index === availabilityColumns.length - 1
                          ? "border-r border-gray-200"
                          : ""
                      }`}
                    >
                      {column.type === "currency" && "₹"}
                      {tableTotals[column.id].toLocaleString()}
                      {column.type === "percentage" && "%"}
                    </td>
                  ))}

                  {visibilityColumns.map((column) => (
                    <td
                      key={column.id}
                      className="px-4 py-4 text-[#0A090B] text-[15px] font-bold leading-4 tracking-[-0.02px]"
                    >
                      {column.type === "currency" && "₹"}
                      {tableTotals[column.id].toLocaleString()}
                      {column.type === "percentage" && "%"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedWidthScrollableTable;
