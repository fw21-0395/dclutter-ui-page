"use client";

import React, { useState } from "react";
import Image from "next/image";
import blinkIt from "@/assets/Images/blinkit.png";
import zepto from "@/assets/Images/zepto.png";
import instamart from "@/assets/Images/swiggy.png";

const BrandSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState("blinkit");

  const brands = [
    {
      id: "blinkit",
      name: "Blinkit",
      image: blinkIt,
    },
    {
      id: "zepto",
      name: "Zepto",
      image: zepto,
    },
    {
      id: "instamart",
      name: "Instamart",
      image: instamart,
    },
  ];

  const selectBrand = (brandId) => {
    setSelectedBrand(brandId);
  };

  // Calculate positions after initial render
  const [itemWidths, setItemWidths] = useState({});
  const [containerRef, setContainerRef] = useState(null);

  // This effect will run after the component mounts to measure the widths
  React.useEffect(() => {
    if (containerRef) {
      const newWidths = {};
      const items = containerRef.querySelectorAll(".brand-item");

      items.forEach((item, index) => {
        newWidths[brands[index].id] = {
          width: item.offsetWidth,
          left: item.offsetLeft,
        };
      });

      setItemWidths(newWidths);
    }
  }, [containerRef, brands]);

  return (
    <div
      ref={setContainerRef}
      className="flex items-center gap-6 self-stretch bg-[#FFF] px-4 py-3 border-b-[#EBEBEB] border-b border-solid relative"
    >
      <div className="flex items-center gap-4 bg-[#FFF] p-1 rounded-xl border-[0.5px] border-solid border-[rgba(3,27,21,0.10)]">
        {Object.keys(itemWidths).length > 0 && (
          <div
            className="absolute h-[32px] rounded-[10px] bg-[#DFEAE8] transition-all duration-300 ease-in-out"
            style={{
              width: `${itemWidths[selectedBrand]?.width || 0}px`,
              left: `${itemWidths[selectedBrand]?.left || 0}px`,
            }}
          />
        )}

        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => selectBrand(brand.id)}
            className={`
            brand-item flex justify-center items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] cursor-pointer z-10
            transition-all duration-300 ease-in-out transform hover:scale-105 relative
            ${selectedBrand === brand.id ? "bg-transparent" : ""}
          `}
          >
            {brand.image && (
              <div className="w-5 h-5 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={20}
                  height={20}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    selectedBrand === brand.id ? "opacity-100" : "opacity-60"
                  }`}
                />
              </div>
            )}
            <span
              className={`text-sm font-medium leading-5 tracking-[-0.05px] transition-colors duration-300 ${
                selectedBrand === brand.id ? "text-[#027056]" : "text-[#9CA3AF]"
              }`}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSelector;
