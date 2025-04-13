"use client";

import React, { useState } from "react";
import { ChevronDown, BarChart2, LineChart, CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "../ui/calender";

// Date Range Picker Component
function DatePickerWithRange({ className }) {
  const [date, setDate] = useState({
    from: new Date(2025, 3, 1), // April 1, 2025
    to: new Date(2025, 3, 3), // April 3, 2025
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "flex h-10 justify-center items-center gap-2 border bg-[#FFF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] px-4 py-2 rounded-[10px] border-solid border-[#D9D9D9]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon size={16} className="text-gray-500" />
            {date?.from ? (
              date.to ? (
                <span className="text-sm text-gray-800">
                  {format(date.from, "MMM dd, yyyy")} -{" "}
                  {format(date.to, "MMM dd, yyyy")}
                </span>
              ) : (
                format(date.from, "MMM dd, yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
            <ChevronDown size={16} className="text-gray-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Switch Demo Component
function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch />
    </div>
  );
}

const DashboardHeader = ({ title }) => {
  const [isActive, setIsActive] = useState(true);
  const [chartType, setChartType] = useState("line");

  return (
    <div className="flex justify-between items-center self-stretch border-b bg-[#FFF] px-6 py-3 border-solid border-[#EBEBEB]">
      <p className="text-[#031B15] text-sm font-medium leading-[18px] tracking-[-0.42px]">
        {title}
      </p>
      <div className="flex justify-end items-center gap-2">
        {/* Chart Toggle with Switch */}
        <div className="flex h-10 justify-center items-center gap-2 border bg-[#FFF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] px-4 py-2 rounded-[10px] border-solid border-[#D9D9D9]">
          <LineChart size={16} className="text-gray-500" />
          <SwitchDemo />
        </div>

        {/* Date Range Picker */}
        <DatePickerWithRange />
      </div>
    </div>
  );
};

export default DashboardHeader;
