"use client";
import React, { useEffect, useReducer } from "react";
import { IoNotificationsOutline, IoMailOutline } from "react-icons/io5";
import { Typography, IconButton, Avatar, faker } from "@/components/index";
import { BiMenuAltRight } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MobileSideNavComp from "@/components/layout/MobileSideNav";

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },
}));

const TopNavComp = ({ leftSide }: { leftSide: React.ReactNode }) => {
  interface ITopNavComp {
    avatar: string;
    firstName: string;
    lastName: string;
    role: string;
  }
  interface IReducerAction {
    type: string;
    payload: string;
  }

  const initialState: ITopNavComp = {
    avatar: "",
    firstName: "",
    lastName: "",
    role: "",
  };

  const reducer = (state: ITopNavComp, action: IReducerAction) => {
    switch (action.type) {
      case "avatar":
        return { ...state, avatar: action.payload };
      case "firstName":
        return { ...state, firstName: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
      case "role":
        return { ...state, role: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "avatar",
      payload: faker.image.urlLoremFlickr({ category: "people" }),
    });
    dispatch({ type: "firstName", payload: faker.person.firstName() });
    dispatch({ type: "lastName", payload: faker.person.lastName() });
    dispatch({ type: "role", payload: "Content Contributor" });
  }, []);

  // ********* MOBILE NAV *********
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex flex-1 items-center">
          <div className="mr-4 block md:hidden">
            <IconButton aria-label="menu" onClick={handleDrawerToggle}>
              <BiMenuAltRight className="text-lg text-black" />
            </IconButton>
          </div>
          {leftSide}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <IconButton aria-label="notifications">
              <IoNotificationsOutline className="text-lg text-black md:text-2xl" />
            </IconButton>
            <IconButton aria-label="mail">
              <IoMailOutline className="text-lg text-black md:text-2xl" />
            </IconButton>
          </div>
          <div className="flex items-center">
            <CustomAvatar src={state.avatar} alt="user">
              M
            </CustomAvatar>
            <div className="hidden pl-1 md:block">
              <div className="flex items-center space-x-1">
                <Typography
                  variant="body1"
                  className="font-outfit text-gray-700"
                >
                  {state.firstName}
                </Typography>
                <Typography
                  variant="body1"
                  className="font-outfit text-gray-700"
                >
                  {state.lastName}
                </Typography>
              </div>
              <Typography variant="body2" className="font-outfit text-gray-700">
                {state.role}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <MobileSideNavComp onClose={handleDrawerToggle} />
      </Drawer>
    </div>
  );
};

export default TopNavComp;
