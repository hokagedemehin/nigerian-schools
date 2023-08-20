"use client";
import React, { useEffect, useReducer, useState } from "react";
import {
  Typography,
  AvatarGroup,
  Avatar,
  faker,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
} from "@/components/index";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import rafiki from "@/assets/images/rafiki.png";
import { styled } from "@mui/material/styles";

const CustomSchoolGroupAvatar = styled(AvatarGroup)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    "& .MuiAvatar-root": {
      width: "40px",
      height: "40px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
  },
}));

const CustomContributorGroupAvatar = styled(AvatarGroup)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiAvatar-root": {
      width: "23px",
      height: "23px",
    },
  },
}));

const StateUniversityCardComp = () => {
  const [stateUniExists] = useState(true);

  // ******* Progress Bar ********
  const [progress] = useState(40);

  // ****** USE REDUCER ********
  const initialState = {
    school1: "",
    school2: "",
    school3: "",
    school4: "",
    contributor1: "",
    contributor2: "",
    contributor3: "",
    contributor4: "",
    contributor5: "",
    contributor6: "",
  };

  interface IReducerAction {
    type: string;
    payload: string;
  }

  const reducer = (
    state: {
      school1: string;
      school2: string;
      school3: string;
      school4: string;
      contributor1: string;
      contributor2: string;
      contributor3: string;
      contributor4: string;
      contributor5: string;
      contributor6: string;
    },
    action: IReducerAction,
  ) => {
    switch (action.type) {
      case "school1":
        return { ...state, school1: action.payload };
      case "school2":
        return { ...state, school2: action.payload };
      case "school3":
        return { ...state, school3: action.payload };
      case "school4":
        return { ...state, school4: action.payload };
      case "contributor1":
        return { ...state, contributor1: action.payload };
      case "contributor2":
        return { ...state, contributor2: action.payload };
      case "contributor3":
        return { ...state, contributor3: action.payload };
      case "contributor4":
        return { ...state, contributor4: action.payload };
      case "contributor5":
        return { ...state, contributor5: action.payload };
      case "contributor6":
        return { ...state, contributor6: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "school1",
      payload: faker.image.urlLoremFlickr({ category: "university" }),
    });
    dispatch({
      type: "school2",
      payload: faker.image.urlLoremFlickr({ category: "university" }),
    });
    dispatch({
      type: "school3",
      payload: faker.image.urlLoremFlickr({ category: "university" }),
    });
    dispatch({
      type: "school4",
      payload: faker.image.urlLoremFlickr({ category: "university" }),
    });
    dispatch({
      type: "contributor1",
      payload: faker.image.avatar(),
    });
    dispatch({
      type: "contributor2",
      payload: faker.image.avatar(),
    });
    dispatch({
      type: "contributor3",
      payload: faker.image.avatar(),
    });
    dispatch({
      type: "contributor4",
      payload: faker.image.avatar(),
    });
    dispatch({
      type: "contributor5",
      payload: faker.image.avatar(),
    });
    dispatch({
      type: "contributor6",
      payload: faker.image.avatar(),
    });

    return () => {};
  }, []);

  // ****** MENU BAR  ********
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* card menu */}
      {stateUniExists ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={handleCloseMenu}
            className="font-outfit text-gray-700"
          >
            View Schools
          </MenuItem>
          <MenuItem
            className="font-outfit text-gray-700"
            onClick={handleCloseMenu}
          >
            Add School
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            className="font-outfit text-gray-700"
            onClick={handleCloseMenu}
          >
            Add School
          </MenuItem>
        </Menu>
      )}
      {stateUniExists && (
        <div className="">
          <div className=" w-[17rem] rounded-lg border border-gray-100 p-4 shadow-md">
            <div className="flex items-center justify-between">
              <CustomSchoolGroupAvatar max={3}>
                <Avatar src={state.school1}>O</Avatar>
                <Avatar src={state.school2}>M</Avatar>
                <Avatar src={""}>M</Avatar>
              </CustomSchoolGroupAvatar>
              <IconButton aria-label="menu" onClick={handleOpenMenu}>
                <MoreHorizOutlinedIcon className="text-base text-black md:text-xl " />
              </IconButton>
            </div>
            {/* name */}
            <div className="pt-2">
              <Typography
                variant="body1"
                className="font-outfit text-lg font-medium text-gray-700 md:text-xl"
              >
                State Universities
              </Typography>
            </div>
            {/* contributors */}
            <div className="flex items-center pt-3">
              <CustomContributorGroupAvatar max={4}>
                <Avatar src={state.contributor1}>O</Avatar>
                <Avatar src={""}>B</Avatar>
                <Avatar src={state.contributor2}>M</Avatar>
                <Avatar src={state.contributor3}>M</Avatar>
                <Avatar src={state.contributor4}>M</Avatar>
                <Avatar src={state.contributor5}>M</Avatar>
              </CustomContributorGroupAvatar>
              <Typography
                variant="body1"
                className="ml-1 font-outfit text-sm font-medium text-gray-700 md:text-base"
              >
                contributors
              </Typography>
            </div>
            {/* progress */}
            <div className="pt-4">
              <Typography
                variant="body1"
                className="font-outfit text-sm font-medium text-gray-700 md:text-base "
              >
                10 out of 50 schools completed
              </Typography>
              <div className="pt-2">
                {/* <div className="h-2 w-full rounded-lg bg-gray-100">
                  <div className="h-2 w-1/2 rounded-lg bg-green-500"></div>
                </div> */}
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "#22c55e",
                    },
                    height: 8,
                    backgroundColor: "#e5e7eb",
                    borderRadius: 5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!stateUniExists && (
        <div className="">
          <div className=" w-[17rem] rounded-lg border border-gray-100 bg-noStateBg p-4 shadow-md">
            <div className="flex">
              <div className="flex flex-1">
                {/* name */}
                <div className="w-full pt-2">
                  <div className="flex justify-center">
                    <Image
                      src={rafiki}
                      alt="Picture of the author"
                      width={500}
                      className="h-[5rem] object-contain  md:h-[7rem]"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <IconButton aria-label="menu" onClick={handleOpenMenu}>
                  <MoreHorizOutlinedIcon className="text-base text-black md:text-xl" />
                </IconButton>
              </div>
            </div>
            <Typography
              variant="body1"
              className="mt-2 text-center font-outfit text-sm font-medium text-gray-700 md:text-base"
            >
              State Universities
            </Typography>
            {/* progress */}
            <div className="pt-2">
              <Typography
                variant="body1"
                className="text-center font-outfit text-xs text-gray-700 md:text-sm"
              >
                No contributors yet
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StateUniversityCardComp;
