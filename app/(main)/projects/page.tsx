"use client";

import React, { useState } from "react";
import { Button, Fab, Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";
import AllSchoolsComp from "@/components/projects/view/AllSchools";
import FederalSchoolsComp from "@/components/projects/view/FederalSchools";
import StateSchoolsComp from "@/components/projects/view/StateSchools";
import PolytechnicSchoolsComp from "@/components/projects/view/PolytechnicSchools";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
const ProjectsPage = () => {
  const router = useRouter();
  const title = (
    <div className="">
      <Typography variant="h6" className="font-outfit text-black">
        Available Projects
      </Typography>
    </div>
  );

  const [selectedSchools, setSelectedSchools] = useState("all");

  return (
    <div className="relative">
      <TopNavComp leftSide={title} />
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:mt-8">
        <Button
          className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
            selectedSchools === "all"
              ? "bg-mainHover text-white hover:bg-mainHover "
              : "bg-blue-100 text-black hover:bg-blue-200"
          }`}
          onClick={() => setSelectedSchools("all")}
          size="small"
        >
          All
        </Button>
        <Button
          className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
            selectedSchools === "federal"
              ? "bg-mainHover text-white hover:bg-mainHover "
              : "bg-blue-100 text-black hover:bg-blue-200"
          }`}
          onClick={() => setSelectedSchools("federal")}
          size="small"
        >
          Federal Universities
        </Button>
        <Button
          className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
            selectedSchools === "state"
              ? "bg-mainHover text-white hover:bg-mainHover "
              : "bg-blue-100 text-black hover:bg-blue-200"
          }`}
          onClick={() => setSelectedSchools("state")}
          size="small"
        >
          State Universities
        </Button>
        <Button
          className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
            selectedSchools === "poly"
              ? "bg-mainHover text-white hover:bg-mainHover "
              : "bg-blue-100 text-black hover:bg-blue-200"
          }`}
          onClick={() => setSelectedSchools("poly")}
          size="small"
        >
          Polytechnics
        </Button>
      </div>
      <div className="mt-10">
        {selectedSchools === "all" && <AllSchoolsComp />}
        {selectedSchools === "federal" && <FederalSchoolsComp />}
        {selectedSchools === "state" && <StateSchoolsComp />}
        {selectedSchools === "poly" && <PolytechnicSchoolsComp />}
      </div>
      <Fab
        color="primary"
        aria-label="add"
        className="fixed
        bottom-10 right-10 bg-main"
        size="small"
        onClick={() => router.push("/projects/add")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ProjectsPage;
