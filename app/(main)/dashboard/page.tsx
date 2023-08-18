"use client";
import React from "react";
import { Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";

const DahsboardPage = () => {
  function title() {
    return (
      <div className="">
        <Typography variant="h6" className="font-outfit text-black">
          Overview
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <TopNavComp leftSide={title} />
      <Typography variant="h6" className="font-outfit text-black">
        Nigerian Schools Overview
      </Typography>
    </div>
  );
};

export default DahsboardPage;
