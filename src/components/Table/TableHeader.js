import React from "react";
import { ChevronDown, BarChart2 } from "lucide-react";

const TableHeader = ({ title, description, onFilterClick }) => {
  return (
    <div className="flex justify-between items-center mb-2 w-full">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        className="px-3 py-2 bg-[#027056] text-white rounded-md flex items-center gap-2"
        onClick={onFilterClick}
      >
        <span>Filters(1)</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default TableHeader;
