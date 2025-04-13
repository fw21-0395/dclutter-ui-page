"use client";

import React, { useState } from "react";
import { PlusCircle, Settings, Users, User, Plus } from "lucide-react";
import Image from "next/image";
import side1 from "@/assets/Images/side_1.png";
import side2 from "@/assets/Images/side_2.png";
import side3 from "@/assets/Images/side_3.png";

export default function LeftIconColumn() {
  const [activeIconId, setActiveIconId] = useState(1);
  const icons = [
    {
      id: 1,
      image: side1,
      isLarge: true,
    },
    {
      id: 2,
      image: side2,
    },
    {
      id: 3,
      image: side3,
    },
    {
      id: 4,
      component: <Plus className="text-gray-500" size={24} />,
    },
  ];

  const footerIcons = [
    {
      id: 5,
      component: <Users className="text-gray-400" size={20} />,
    },
    {
      id: 6,
      component: (
        <div className="w-full h-full justify-center items-center flex bg-green-700 overflow-hidden text-white text-center text-xs font-semibold leading-[normal] rounded-xl">
          SS
        </div>
      ),
    },
  ];

  const handleIconClick = (id) => {
    setActiveIconId(id);
  };

  return (
    <div className="fixed top-0 left-0 h-full pb-36 bg-white w-14 z-50 flex flex-col items-center py-4 pt-5">
      <div className="flex flex-col items-center">
        {icons.slice(0, 1).map((icon) => (
          <div
            key={icon.id}
            className={`
              w-12 h-12 rounded-xl cursor-pointer overflow-hidden mb-6
              transition-all duration-200 
              ${
                icon.id === activeIconId
                  ? "border-2 border-solid border-[#139C53]"
                  : "border border-solid border-gray-200"
              }
            `}
            onClick={() => handleIconClick(icon.id)}
          >
            {icon.image && (
              <Image
                src={icon.image}
                alt={`Icon ${icon.id}`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        <div className="flex flex-col items-center space-y-4">
          {icons.slice(1).map((icon) => (
            <div
              key={icon.id}
              className={`
                w-10 h-10 rounded-xl cursor-pointer overflow-hidden
                transition-all duration-200 
                ${
                  icon.id === activeIconId
                    ? "border-2 border-solid border-[#139C53]"
                    : "border border-solid border-gray-200"
                }
              `}
              onClick={() => handleIconClick(icon.id)}
            >
              {icon.image ? (
                <Image
                  src={icon.image}
                  alt={`Icon ${icon.id}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {icon.component}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center space-y-4">
        {footerIcons.map((icon) => (
          <div
            key={icon.id}
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer 
               transition-all duration-200
              ${
                icon.id === activeIconId
                  ? "border border-solid border-[#139C53]"
                  : ""
              }
            `}
            onClick={() => handleIconClick(icon.id)}
          >
            {icon.component}
          </div>
        ))}
      </div>
    </div>
  );
}
