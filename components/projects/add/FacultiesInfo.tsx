"use client";
import { IFacultyFormInput, INewFormInput } from "@/interface/FormTypes";
import React, { useState } from "react";
import { Control, Controller, useForm, SubmitHandler } from "react-hook-form";
import {
  Typography,
  TextField,
  Button,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Tooltip,
} from "@/components/index";
import {
  DataGrid,
  GridActionsCellItem,
  // GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  // GridToolbar,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import NoRecentProject from "@/assets/images/NoRecentProject.png";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";

const FacultiesInfoForm = ({
  control, // errors,
}: {
  control: Control<INewFormInput>;
  // errors: FieldErrors<INewFormInput>;
}) => {
  const [departmentTable, setDepartmentTable] = useState<IFacultyFormInput[]>(
    [],
  );

  const DepartmentDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit  text-sm text-black">
          {props.value}
        </Typography>
      </Tooltip>
    );
  };

  const HeadOfDepartmentDisplay = (
    props: GridRenderCellParams<any, string>,
  ) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit text-sm text-black">
          {props.value}
        </Typography>
      </Tooltip>
    );
  };

  const NumberOfYearsDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit text-sm text-black">
          {props.value}
        </Typography>
      </Tooltip>
    );
  };

  const TutionFeeDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit text-sm text-black">
          &#8358;{props.value}
        </Typography>
      </Tooltip>
    );
  };

  const AcceptanceFeeDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit text-sm text-black">
          &#8358;{props.value}
        </Typography>
      </Tooltip>
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
          No contributions yet, add a department with the button above
        </Typography>
      </div>
    );
  };

  const CustomToolBar = () => (
    <GridToolbarContainer>
      <div className="flex flex-1"></div>
      <Button
        className="font-outfit font-semibold normal-case text-main hover:bg-blue-100"
        onClick={handleDialogOpen}
      >
        Add department
      </Button>
    </GridToolbarContainer>
  );

  const columns: GridColDef[] = [
    {
      field: "department_name",
      headerName: "Department",
      width: 200,
      renderCell: DepartmentDisplay,
      headerClassName: "font-outfit font-semibold text-black",
    },
    {
      field: "head_of_department",
      headerName: "Head of Department",
      width: 200,
      headerClassName: "font-outfit font-semibold text-black",
      renderCell: HeadOfDepartmentDisplay,
    },
    {
      field: "number_of_years",
      headerName: "Number of years",
      width: 200,
      headerClassName: "font-outfit font-semibold text-black",
      renderCell: NumberOfYearsDisplay,
    },
    {
      field: "tution_fees",
      headerName: "Tution Fee",
      width: 200,
      headerClassName: "font-outfit font-semibold text-black",
      renderCell: TutionFeeDisplay,
    },
    {
      field: "acceptance_fees",
      headerName: "Acceptance Fee",
      width: 200,
      headerClassName: "font-outfit font-semibold text-black",
      renderCell: AcceptanceFeeDisplay,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      headerClassName: "font-outfit font-semibold text-black",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<FiEdit3 />}
          label="Edit"
          onClick={() => console.log(params.id)}
          showInMenu
          key={params.id}
          // className="font-outfit font-semibold text-black hover:bg-gray-100"
        />,
        <GridActionsCellItem
          icon={<FiEdit3 />}
          label="Delete"
          onClick={() => console.log(params.id)}
          showInMenu
          key={params.id}
          // className="font-outfit font-semibold text-black hover:bg-gray-100"
        />,
      ],
    },
  ];

  // *************** END OF TABLE CONFIGURATION ***************** //

  // ************** DEPARTMENT FORM CONFIGURATION *************** //

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const {
    control: departmentControl,
    handleSubmit: handleDepartmentSubmit,
    // formState: { isSubmitting: departmentIsSubmitting },
    reset,
  } = useForm<IFacultyFormInput>({
    defaultValues: {
      department_name: "",
      head_of_department: "",
      number_of_years: "",
      tution_fees: "",
      acceptance_fees: "",
    },
  });

  const departmentSubmit: SubmitHandler<IFacultyFormInput> = async (data) => {
    console.log("data", data);
    const final_data = {
      id: departmentTable.length + 1,
      ...data,
    };
    setDepartmentTable([...departmentTable, final_data]);
    reset();
    handleDialogClose();
  };

  // ************ END OF DEPARTMENT FORM CONFIGURATION ********** //

  return (
    <div className="max-w-screen-lg space-y-3">
      <div className="max-w-screen-md space-y-3">
        <div className="space-y-1 pt-4">
          <Typography
            variant="body2"
            className="font-outfit font-semibold text-black"
          >
            Name of Faculty
          </Typography>
          <Controller
            name="faculty_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="w-full placeholder-gray-600"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: <span>&#8358;</span>,
                }}
                size="small"
              />
            )}
          />
        </div>
      </div>
      <div className="h-[27rem] rounded-lg bg-white p-2 shadow-md">
        <DataGrid
          rows={departmentTable}
          columns={columns}
          getRowHeight={() => "auto"}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
                page: 0,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          slots={{
            loadingOverlay: LinearProgress,
            noRowsOverlay: EmptyDataDisplay,
            toolbar: CustomToolBar,
          }}
        />
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="font-outfit text-black">
          Add Department
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleDepartmentSubmit(departmentSubmit)}>
            <div className="space-y-3">
              <div className="space-y-1">
                <Typography
                  variant="body2"
                  className="font-outfit font-semibold text-black"
                >
                  Department Name
                </Typography>
                <Controller
                  name="department_name"
                  control={departmentControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      className="w-full placeholder-gray-600"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </div>
              <div className="space-y-1">
                <Typography
                  variant="body2"
                  className="font-outfit font-semibold text-black"
                >
                  Head of Department
                </Typography>
                <Controller
                  name="head_of_department"
                  control={departmentControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      className="w-full placeholder-gray-600"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </div>
              <div className="space-y-1">
                <Typography
                  variant="body2"
                  className="font-outfit font-semibold text-black"
                >
                  Number of years
                </Typography>
                <Controller
                  name="number_of_years"
                  control={departmentControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="tel"
                      className="w-full placeholder-gray-600"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </div>
              <div className="space-y-1">
                <Typography
                  variant="body2"
                  className="font-outfit font-semibold text-black"
                >
                  Tution Fees
                </Typography>
                <Controller
                  name="tution_fees"
                  control={departmentControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="tel"
                      className="w-full placeholder-gray-600"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </div>
              <div className="space-y-1">
                <Typography
                  variant="body2"
                  className="font-outfit font-semibold text-black"
                >
                  Acceptance Fees
                </Typography>
                <Controller
                  name="acceptance_fees"
                  control={departmentControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="tel"
                      className="w-full placeholder-gray-600"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="font-outfit font-semibold normal-case text-red-700 hover:bg-red-100"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
          <Button
            className="font-outfit font-semibold normal-case text-main hover:bg-blue-100"
            onClick={handleDepartmentSubmit(departmentSubmit)}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FacultiesInfoForm;
