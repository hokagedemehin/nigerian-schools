"use client";

import React from "react";
import { Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";

const ProjectsPage = () => {
  const title = (
    <div className="">
      <Typography variant="h6" className="font-outfit text-black">
        Projects
      </Typography>
    </div>
  );

  return (
    <div>
      <TopNavComp leftSide={title} />
      <Typography variant="h6" className="font-outfit text-black">
        Nigerian Schools Projects
      </Typography>
    </div>
  );
};

export default ProjectsPage;
