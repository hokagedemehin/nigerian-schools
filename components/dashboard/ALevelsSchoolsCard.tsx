"use client";
import React, { useEffect, useReducer } from "react";
import { Typography, AvatarGroup, Avatar, faker } from "@/components/index";
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

const ALevelsSchoolCard = () => {
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
  return (
    <div className="">
      <div className=" w-[17rem] rounded-lg border border-gray-100 p-4 shadow-md">
        <div className="flex items-center justify-between">
          <CustomSchoolGroupAvatar max={3}>
            <Avatar src={state.school1}>O</Avatar>
            <Avatar src={state.school2}>M</Avatar>
            <Avatar src={""}>M</Avatar>
          </CustomSchoolGroupAvatar>
        </div>
        {/* name */}
        <div className="pt-2">
          <Typography
            variant="body1"
            className="font-outfit text-base font-medium text-gray-700 md:text-xl"
          >
            A Levels Schools
          </Typography>
        </div>

        {/* progress */}
        <div className="pt-4">
          <Typography
            variant="body1"
            className="font-outfit text-xs font-medium text-gray-700 md:text-base "
          >
            No contributors yet
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ALevelsSchoolCard;
