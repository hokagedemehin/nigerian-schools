"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  AvatarGroup,
  Avatar,
  faker,
  LinearProgress,
  Tooltip,
  Chip,
  Button,
} from "@/components/index";
import "swiper/css";
import "swiper/css/bundle";
import { styled } from "@mui/material/styles";
import {
  DataGrid,
  // GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  // GridToolbar,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import Image from "next/image";
import NoRecentProject from "@/assets/images/NoRecentProject.png";
import NoSearchResult1 from "@/assets/images/NoSearchResult1.png";

const CustomSchoolLogo = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },
}));

// const CustomContributorAvatar = styled(Avatar)(({ theme }) => ({
//   [theme.breakpoints.up("md")]: {
//     width: "30px",
//     height: "30px",
//   },
//   [theme.breakpoints.down("md")]: {
//     width: "23px",
//     height: "23px",
//   },
// }));

const CustomContributorGroupAvatar = styled(AvatarGroup)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    "& .MuiAvatar-root": {
      width: "23px",
      height: "23px",
      fontSize: "10px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiAvatar-root": {
      width: "20px",
      height: "2px",
      fontSize: "8px",
    },
  },
}));

interface IDataTable {
  logo: string;
  name: string;
  contributors: {
    id: string;
    imageUrl: string;
  }[];
  date: string;
  status: string;
}

const RecentProjectTable = () => {
  const [projectExists] = useState(true);

  // ************* TABLE DATA *************
  const [tableData, setTableData] = useState<IDataTable[]>([]);

  useEffect(() => {
    let data: IDataTable[] = [];
    for (let step = 0; step < 20; step++) {
      const randomNum = faker.helpers.rangeToNumber({
        min: 1,
        max: 10,
      });
      const contributorsAvatar = [];
      for (let step = 0; step < randomNum; step++) {
        contributorsAvatar.push({
          id: faker.string.uuid(),
          imageUrl: faker.image.urlLoremFlickr({
            category: "people",
          }),
        });
      }
      const obj = {
        id: faker.string.uuid(),
        logo: faker.image.urlLoremFlickr({
          category: "logo",
        }),
        name: faker.helpers.arrayElement([
          "University of Ibadan",
          "University of Lagos",
          "University of Benin",
          "University of Abuja",
          "University of Port Harcourt",
          "University of Calabar",
          "University of Jos",
          "University of Ilorin",
          "University of Maiduguri",
          "University of Uyo",
          "University of Nigeria",
          "University of Benin",
          "University of Abuja",
          "University of Port Harcourt",
          "University of Calabar",
          "University of Jos",
          "University of Ilorin",
          "University of Maiduguri",
          "University of Uyo",
          "University of Nigeria",
        ]),
        contributors: contributorsAvatar,
        date: dayjs(faker.date.past()).format("MMM DD, YYYY"),
        status: faker.helpers.arrayElement(["In Progress", "Completed"]),
      };
      data.push(obj);
    }
    setTableData(data);
  }, []);

  const LogoDataDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <CustomSchoolLogo
        src={props.value as string}
        alt="school logo"
        // sx={{ width: "30px", height: "30px" }}
      />
    );
  };

  const nameDataDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Tooltip title={props.value as string}>
        <Typography
          variant="body2"
          className="font-outfit font-medium text-gray-700"
        >
          {props.value}
        </Typography>
      </Tooltip>
    );
  };

  const contributorsDataDisplay = (props: GridRenderCellParams<any>) => {
    return (
      <div className="flex items-center">
        <CustomContributorGroupAvatar max={3}>
          {(props.value as { id: string; imageUrl: string }[]).map(
            (contributor) => (
              <Avatar
                key={contributor.id}
                src={contributor.imageUrl}
                alt="contributor"
              />
            ),
          )}
        </CustomContributorGroupAvatar>
        <Typography
          variant="body2"
          className="fon-semibold font-outfit text-gray-700"
        >
          {props.value.length > 1 ? "contributors" : "contributor"}
        </Typography>
      </div>
    );
  };

  const dateDataDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Typography variant="body2" className="font-outfit text-gray-700">
        {props.value}
      </Typography>
    );
  };

  const statusDataDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <div className="">
        <Chip
          label={props.value as string}
          className=" font-outfit font-semibold"
          size="small"
          color={props.value === "In Progress" ? "warning" : "success"}
        />
      </div>
    );
  };

  const EmptyDataDisplay = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-2">
        <Image
          src={NoRecentProject}
          alt="empty rows"
          className="h-auto w-[10rem]"
          placeholder="blur"
        />
        <Typography
          variant="body1"
          className="text-center font-outfit text-sm font-medium text-black"
        >
          Nothing to show here, you can change this by contributing
        </Typography>
        <Button className="font-outsfit mt-7 bg-main font-semibold text-white hover:bg-mainHover">
          <Typography
            variant="body2"
            className="font-outfit font-semibold normal-case"
          >
            Contribute
          </Typography>
        </Button>
      </div>
    );
  };

  const NoSearchResultDataDisplay = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-2">
        <Image
          src={NoSearchResult1}
          alt="empty rows"
          className="h-auto w-[10rem]"
          placeholder="blur"
        />
        <Typography
          variant="body1"
          className="text-center font-outfit text-sm font-medium text-black"
        >
          No search result found
        </Typography>
      </div>
    );
  };

  const CustomeToolBar = () => {
    return (
      <GridToolbarContainer>
        <div className="flex flex-1"></div>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };

  // ************ TABLE COLUMNS ************
  const columns: GridColDef[] = [
    {
      field: "logo",
      headerName: "Logo",
      width: 100,
      renderCell: LogoDataDisplay,
      headerClassName: "font-outfit font-semibold text-gray-700",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: nameDataDisplay,
      headerClassName: "font-outfit font-semibold text-gray-700",
    },
    {
      field: "contributors",
      headerName: "Contributors",
      width: 200,
      renderCell: contributorsDataDisplay,
      headerClassName: "font-outfit font-semibold text-gray-700",
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      renderCell: dateDataDisplay,
      headerClassName: "font-outfit font-semibold text-gray-700",
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: statusDataDisplay,
      headerClassName: "font-outfit font-semibold text-gray-700",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <Button
            aria-label="Edit"
            aria-controls="Edit-button"
            aria-haspopup="false"
            // onClick={handleClick}
            size="small"
          >
            <Typography
              variant="body2"
              className="font-outfit font-semibold normal-case text-gray-800"
            >
              Edit
            </Typography>
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      {projectExists && (
        <div className="h-[24.2rem] bg-white">
          <DataGrid
            rows={tableData}
            columns={columns}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            slots={{
              loadingOverlay: LinearProgress,
              noResultsOverlay: NoSearchResultDataDisplay,
              noRowsOverlay: EmptyDataDisplay,
              toolbar: CustomeToolBar,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            // loading
          />
        </div>
      )}
      {!projectExists && (
        <div className="h-[24.2rem] bg-white">
          <DataGrid
            rows={[]}
            columns={columns}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            slots={{
              // loadingOverlay: LinearProgress,
              noResultsOverlay: NoSearchResultDataDisplay,
              noRowsOverlay: EmptyDataDisplay,
            }}
            // loading
          />
        </div>
      )}
    </div>
  );
};

export default RecentProjectTable;
