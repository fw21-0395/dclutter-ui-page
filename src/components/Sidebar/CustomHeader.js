"use client";
import React, { useState } from "react";
import {
  Check,
  ChevronsUpDown,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  SearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  SidebarTrigger,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const sidebarSelectBrands = [
  { value: "blinkit", label: "Blinkit" },
  { value: "dunzo", label: "Dunzo" },
  { value: "swiggy", label: "Swiggy" },
  { value: "zomato", label: "Zomato" },
];

export default function CustomSidebarHeader() {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(sidebarSelectBrands[0].value);

  return (
    <SidebarHeader>
      <div className="w-full justify-between flex items-center gap-4 py-5 bg-white">
        <div className="flex flex-row items-center gap-2 w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between bg-white border-gray-200 text-black"
              >
                {value ? (
                  <div className="flex items-center gap-2">
                    <div className="text-white text-center text-[11px] font-semibold leading-[normal] flex justify-center items-center gap-2.5 bg-[#309E96] p-[5px] rounded-[7px]">
                      {sidebarSelectBrands
                        .find((brand) => brand.value === value)
                        ?.label.slice(0, 2)}
                    </div>
                    {isExpanded && (
                      <span className="text-black">
                        {
                          sidebarSelectBrands.find(
                            (brand) => brand.value === value
                          )?.label
                        }
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-black">Select brand...</span>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0 bg-white shadow-md border border-gray-200 rounded-md">
              <Command className="bg-white rounded-md">
                <div className="flex h-9 items-center gap-2 border-b px-3">
                  <SearchIcon className="size-4 shrink-0 opacity-50" />
                  <CommandInput
                    placeholder="Search brand..."
                    className="h-8 flex-1 bg-transparent text-sm outline-none text-black"
                  />
                </div>
                <CommandList className="max-h-[300px] overflow-y-auto py-1">
                  <CommandEmpty className="py-6 text-center text-sm text-gray-500">
                    No brand found.
                  </CommandEmpty>
                  <CommandGroup className="overflow-hidden p-1">
                    {sidebarSelectBrands.map((brand) => (
                      <CommandItem
                        key={brand.value}
                        value={brand.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                        className="flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[selected=true]:bg-gray-100 text-black"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === brand.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        <div className="flex items-center gap-2">
                          <div className="text-white text-center text-[11px] font-semibold leading-[normal] flex justify-center items-center gap-2.5 bg-[#309E96] p-[5px] rounded-[7px]">
                            {brand.label.slice(0, 2)}
                          </div>
                          <span className="text-black">{brand.label}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <SidebarTrigger>
          {isExpanded ? <ChevronsLeftIcon /> : <ChevronsRightIcon />}
        </SidebarTrigger>
      </div>
    </SidebarHeader>
  );
}
