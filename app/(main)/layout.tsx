"use client";
import DesktopSideNav from "@/components/layout/DesktopSideNav";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen  bg-main ">
      <div className="flex h-full max-w-screen-2xl">
        <div className="dash_sidebar hidden md:block">
          <DesktopSideNav />
        </div>
        <div className="page_content m-2 w-full rounded-lg bg-white md:m-4">
          <div className="p-2 md:p-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
