"use client";

import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarFooter,
} from "@/components/ui/sidebar";
import CustomSidebarHeader from "@/components/Sidebar/CustomHeader";
import CustomSidebarContent from "@/components/Sidebar/SidebarContent";
import LeftIconColumn from "@/components/Sidebar/LeftIconColumn";
import MainContentWrapper from "@/components/Sidebar/MainContentWrapper";
import Main from "@/components/Main/Main";

export default function AppLayout() {
  return (
    <section className="bg-white">
      <SidebarProvider defaultOpen={true}>
        <div className="flex">
          <LeftIconColumn />

          <Sidebar
            side="left"
            variant="sidebar"
            collapsible="icon"
            className="min-w-[150px] z-40"
          >
            <CustomSidebarHeader />
            <CustomSidebarContent />
          </Sidebar>

          <MainContentWrapper>
            <Main />
          </MainContentWrapper>
        </div>
      </SidebarProvider>
      <style>{`
      body {
        background-color: #ffff;
      }
      /* Add this to your global CSS file */

/* Adjust sidebar positioning to start after the icon column */
[data-slot="sidebar-container"] {
  left: 56px !important; /* 14rem = 56px - width of the left icon column */
}

/* Make sure the sidebar container appears in the right z-index order */
[data-slot="sidebar-container"] {
  z-index: 40;
}

/* Ensure the left icon column stays on top */
.left-icon-column {
  z-index: 50;
}

/* Adjust sidebar gap to account for the left icon column */
[data-slot="sidebar-gap"] {
  margin-left: 56px;
}
      `}</style>
    </section>
  );
}
