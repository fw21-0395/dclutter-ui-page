"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";

import Image from "next/image";
import homeIcon from "@/assets/Icons/homeIcon.svg";
import channelsIcon from "@/assets/Icons/channels.svg";
import creativesIcon from "@/assets/Icons/creative.svg";
import help from "@/assets/Icons/help.svg";
import settingsIcon from "@/assets/Icons/Settings.svg";

export default function CustomSidebarContent() {
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("overview");
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <div className="flex flex-col justify-between items-start px-4 py-6 bg-[#F8F8F8] ">
      <SidebarContent>
        <SidebarMenu>
          <div className="flex h-[703px] flex-col justify-between items-start shrink-0 self-stretch">
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Overview"
                  className="flex-1"
                  isActive={activeItem === "overview"}
                  onClick={() => setActiveItem("overview")}
                >
                  <Image
                    src={homeIcon}
                    className="min-w-5 min-h-5"
                    alt="Overview Icon"
                  />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <div
                  className="flex items-center w-full cursor-pointer"
                  onClick={() => {
                    setChannelsOpen((prev) => !prev);
                    setActiveItem("channels");
                  }}
                >
                  <SidebarMenuButton tooltip="Channels" className="flex-1  ">
                    <Image
                      src={channelsIcon}
                      className="min-w-5 min-h-5"
                      alt="Channels Icon"
                    />
                    <span>Channels</span>
                  </SidebarMenuButton>
                  <div className="ml-auto">
                    {isExpanded && (
                      <ChevronDown
                        strokeWidth={1.5}
                        className={`min-w-5 min-h-5 transition-transform duration-300 ${
                          channelsOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    channelsOpen
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        tooltip="Meta Ads"
                        isActive={activeItem === "metaAds"}
                        onClick={() => setActiveItem("metaAds")}
                      >
                        <span>Meta Ads</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        tooltip="Google Ads"
                        isActive={activeItem === "googleAds"}
                        onClick={() => setActiveItem("googleAds")}
                      >
                        <span>Google Ads</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        tooltip="Quick Commerce"
                        isActive={activeItem === "quickCommerce"}
                        onClick={() => setActiveItem("quickCommerce")}
                        className=" flex"
                      >
                        <span>Quick Commerce</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Creatives"
                  isActive={activeItem === "creatives"}
                  onClick={() => setActiveItem("creatives")}
                >
                  <Image
                    src={creativesIcon}
                    className="min-w-5 min-h-5"
                    alt="Creatives Icon"
                  />
                  <span>Creatives</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Help"
                  className="flex-1"
                  isActive={activeItem === "help"}
                  onClick={() => setActiveItem("help")}
                >
                  <Image
                    src={help}
                    className="min-w-5 min-h-5"
                    alt="Overview Icon"
                  />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Settings"
                  className="flex-1"
                  isActive={activeItem === "settings"}
                  onClick={() => setActiveItem("settings")}
                >
                  <Image
                    src={settingsIcon}
                    className="min-w-5 min-h-5"
                    alt="Overview Icon"
                  />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          </div>
        </SidebarMenu>
      </SidebarContent>
    </div>
  );
}
