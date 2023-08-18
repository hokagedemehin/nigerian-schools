"use client";

import React from "react";
import { Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";

const SettingsPage = () => {
  function title() {
    return (
      <div className="">
        <Typography variant="h6" className="font-outfit text-black">
          Settings
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <TopNavComp leftSide={title} />
      <Typography variant="h6" className="font-outfit text-black">
        Nigerian Schools Settings
      </Typography>
    </div>
  );
};

export default SettingsPage;
