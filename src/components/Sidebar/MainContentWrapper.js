"use client";

import { useSidebar } from "@/components/ui/sidebar";

export default function MainContentWrapper({ children }) {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  const LEFT_ICON_COLUMN_WIDTH = 56;
  const SIDEBAR_EXPANDED_WIDTH = 0;
  const SIDEBAR_COLLAPSED_WIDTH = 48;

  return (
    <div
      className="flex-1 transition-all duration-200 ease-linear  "
      style={{
        marginLeft: isExpanded
          ? ``
          : `${LEFT_ICON_COLUMN_WIDTH + SIDEBAR_COLLAPSED_WIDTH}px`,
      }}
    >
      {children}
    </div>
  );
}
