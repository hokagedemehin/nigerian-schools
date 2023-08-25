"use client";
import { Button, Divider, Typography } from "@/components/index";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsGrid } from "react-icons/bs";
import { GoFile } from "react-icons/go";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import ContactUsDialog from "../dashboard/ContactUsDialog";

const MobileSideNavComp = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();
  // ********* DIALOG **********
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    onClose();
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <nav className="flex h-screen w-[15rem] flex-col justify-between bg-main pb-5 pt-5">
      <div className=" ">
        <Typography variant="h6" className="pl-3 font-outfit text-white">
          Nigerian Schools
        </Typography>
        <div className="mb-4 mt-4">
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            className="bg-white"
          />
        </div>
        <div className="w-[14rem] space-y-3">
          {/* <Typography variant="body1" className="pl-3 font-outfit text-white">
            Main Menu
          </Typography> */}
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
                <span
                  className={`font-outfit text-base tracking-wider md:text-lg`}
                >
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
                pathname == "/projects" ||
                pathname == "/projects/[id]" ||
                pathname == "/projects/add"
                  ? " bg-white text-black "
                  : " bg-main text-white hover:bg-gray-600"
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <GoFile className="text-xl" />
                <span
                  className={`font-outfit text-base tracking-wider md:text-lg`}
                >
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
                <span
                  className={`font-outfit text-base tracking-wider md:text-lg`}
                >
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
              } my-4 flex items-center space-x-4 rounded-r-lg px-4 py-2 transition-all duration-300 ease-in  `}
            >
              <div className="flex items-center space-x-2">
                <AiOutlineSetting className="text-xl" />
                <span
                  className={`font-outfit text-base tracking-wider md:text-lg`}
                >
                  Settings
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-4 w-[12rem] rounded-lg bg-[url(https://res.cloudinary.com/dfmtuwgcf/image/upload/v1692461367/SideNavBg_jgubo4.jpg)] bg-no-repeat object-cover p-2">
        <div className="">
          <Typography
            variant="body1"
            className=" pt-8 text-center font-outfit text-xs text-gray-700"
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
            size="small"
            onClick={handleClickOpen}
          >
            <Typography
              variant="body1"
              className="font-outfit text-sm normal-case text-white"
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

export default MobileSideNavComp;
