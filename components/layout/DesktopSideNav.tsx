"use client";
import { Button, Divider, Typography } from "@/components/index";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsGrid } from "react-icons/bs";
import { GoFile } from "react-icons/go";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import ContactUsDialog from "../dashboard/ContactUsDialog";

const DesktopSideNav = () => {
  const pathname = usePathname();

  // ********* DIALOG **********
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <nav className="flex h-screen w-[17rem] flex-col justify-between pb-5 pt-10">
      <div className="">
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
        <div className="w-[14rem] space-y-3">
          <Typography variant="body1" className="pl-3 font-outfit text-white">
            Main Menu
          </Typography>
          {/* overview */}
          <div className="">
            <Link
              href="/dashboard"
              className={`${
                pathname == "/dashboard"
                  ? " bg-white text-black "
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex w-full items-center space-x-4 rounded-r-lg px-4 py-2  transition-all duration-300 ease-in`}
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
              } my-4 flex w-full items-center space-x-4 rounded-r-lg px-4 py-2  transition-all duration-300 ease-in`}
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
              } my-4 flex w-full items-center space-x-4 rounded-r-lg px-4 py-2  transition-all duration-300 ease-in`}
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
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex w-full items-center space-x-4 rounded-r-lg px-4 py-2  transition-all duration-300 ease-in`}
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
      <div className="ml-2 w-[75%] rounded-lg bg-[url(https://res.cloudinary.com/dfmtuwgcf/image/upload/v1692461367/SideNavBg_jgubo4.jpg)] bg-no-repeat object-cover p-4">
        <div className="">
          <Typography
            variant="body1"
            className=" pt-8 text-center font-outfit text-sm text-gray-700"
          >
            If you have any suggestions, or any projects you think should be
            added, you can do well by reaching out to us
          </Typography>
        </div>
        <div className="mb-4 flex justify-center">
          <Button
            variant="contained"
            color="primary"
            className="mt-4  bg-main hover:bg-blue-700"
            onClick={handleClickOpen}
          >
            <Typography
              variant="body1"
              className="font-outfit normal-case text-white"
            >
              Contact Us
            </Typography>
          </Button>
        </div>
        <ContactUsDialog open={openDialog} onClose={handleClose} />
      </div>
    </nav>
  );
};

export default DesktopSideNav;
