"use client";
import React from "react";
import { IoNotificationsOutline, IoMailOutline } from "react-icons/io5";
import { Typography, IconButton } from "@/components/index";
import { BiMenuAltRight } from "react-icons/bi";

const TopNavComp = ({
  leftSide, // rightSide,
}: {
  leftSide: () => React.ReactNode;
  // rightSide: () => React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-1 items-center">
          <div className="mr-4 block md:hidden">
            <IconButton aria-label="menu">
              <BiMenuAltRight className="text-lg text-black" />
            </IconButton>
          </div>
          {leftSide()}
        </div>
        <div className="flex items-center space-x-1">
          <IconButton aria-label="notifications">
            <IoNotificationsOutline className="text-lg text-black" />
          </IconButton>
          <IconButton aria-label="mail">
            <IoMailOutline className="text-lg text-black" />
          </IconButton>
          <Typography variant="h6" className="font-outfit text-black">
            Profile
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TopNavComp;
