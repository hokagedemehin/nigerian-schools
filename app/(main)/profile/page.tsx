"use client";

import React from "react";
import { Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";

const ProfilePage = () => {
  const title = (
    <div className="">
      <Typography variant="h6" className="font-outfit text-black">
        Profile
      </Typography>
    </div>
  );

  return (
    <div>
      <TopNavComp leftSide={title} />
      <Typography variant="h6" className="font-outfit text-black">
        Nigerian Schools profile
      </Typography>
    </div>
  );
};

export default ProfilePage;
