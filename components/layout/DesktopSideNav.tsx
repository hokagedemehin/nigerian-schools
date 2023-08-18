"use client";
import { Divider, Typography } from "@/components/index";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsGrid } from "react-icons/bs";
import { GoFile } from "react-icons/go";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

const DesktopSideNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-screen pb-5 pt-10">
      <div className=" w-[20rem]">
        <Typography variant="h6" className="pl-3 font-outfit text-white">
          Nigerian Schools
        </Typography>
        <div className="mb-8 mt-4">
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            className="bg-white"
          />
        </div>
        <div className="space-y-3">
          <Typography variant="body1" className="pl-3 font-outfit text-white">
            Main Menu
          </Typography>
          {/* overview */}
          <div className="">
            <Link
              href="/dashboard"
              className={`${
                pathname == "/dashboard"
                  ? " roun  bg-white text-black "
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <BsGrid className="text-xl" />
                <span className={`font-outfit text-lg tracking-wider`}>
                  Overview
                </span>
              </div>
            </Link>
          </div>
          {/* projects */}
          <div className="">
            <Link
              href="/projects"
              className={`${
                pathname == "/projects"
                  ? " bg-white text-black "
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <GoFile className="text-xl" />
                <span className={`font-outfit text-lg tracking-wider`}>
                  Projects
                </span>
              </div>
            </Link>
          </div>
          {/* profile */}
          <div className="">
            <Link
              href="/profile"
              className={`${
                pathname == "/profile"
                  ? " bg-white text-black "
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <AiOutlineUser className="text-xl" />
                <span className={`font-outfit text-lg tracking-wider`}>
                  Profile
                </span>
              </div>
            </Link>
          </div>
          {/* settings */}
          <div className="">
            <Link
              href="/settings"
              className={`${
                pathname == "/settings"
                  ? " bg-white text-black "
                  : " bg-main text-white hover:bg-gray-400"
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <AiOutlineSetting className="text-xl" />
                <span className={`font-outfit text-lg tracking-wider`}>
                  Settings
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopSideNav;
