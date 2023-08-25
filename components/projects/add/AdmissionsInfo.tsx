"use client";
import { IAdmissionFormInput, INewFormInput } from "@/interface/FormTypes";
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
  // GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  // GridToolbar,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import NoRecentProject from "@/assets/images/NoRecentProject.png";
import Image from "next/image";

const AdmissionsInfoForm = ({
  control, // errors,
}: {
  control: Control<INewFormInput>;
  // errors: FieldErrors<INewFormInput>;
}) => {
  const [departmentTable, setDepartmentTable] = useState<IAdmissionFormInput[]>(
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

  const PostUtmeDateDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Typography variant="body2" className="font-outfit  text-sm text-black">
        {dayjs(props.value).format("MMM DD, YYYY")}
      </Typography>
    );
  };

  const CutOffMarkDisplay = (props: GridRenderCellParams<any, string>) => {
    return (
      <Typography variant="body2" className="font-outfit text-sm  text-black">
        {props.value}
      </Typography>
    );
  };

  const WaecRequirementsDisplay = (
    props: GridRenderCellParams<any, string>,
  ) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography
          variant="body2"
          className="break-words font-outfit text-sm text-black"
        >
          {props.value}
        </Typography>
      </Tooltip>
    );
  };

  const JambRequirementsDisplay = (
    props: GridRenderCellParams<any, string>,
  ) => {
    return (
      <Tooltip title={props.value} placement="top-start">
        <Typography variant="body2" className="font-outfit text-sm  text-black">
          {props.value}
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
      // flex: 1,
    },
    {
      field: "post_utme_date",
      headerName: "Post UTME Date",
      width: 180,
      renderCell: PostUtmeDateDisplay,
      headerClassName: "font-outfit font-semibold text-black",
      // flex: 1,
    },
    {
      field: "cut_off_mark",
      headerName: "Cut off mark",
      width: 150,
      renderCell: CutOffMarkDisplay,
      headerClassName: "font-outfit font-semibold text-black",
      // flex: 1,
    },
    {
      field: "waec_requirements",
      headerName: "Waec requirements",
      width: 200,
      renderCell: WaecRequirementsDisplay,
      headerClassName: "font-outfit font-semibold text-black",
      // flex: 1,
    },
    {
      field: "jamb_requirements",
      headerName: "Jamb requirements",
      width: 200,
      renderCell: JambRequirementsDisplay,
      headerClassName: "font-outfit font-semibold text-black",
      // flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      headerClassName: "font-outfit font-semibold text-black",
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
              className="font-outfit text-sm font-semibold normal-case text-main"
            >
              Edit
            </Typography>
          </Button>
        );
      },
    },
  ];

  // *************** END OF TABLE CONFIGURATION ***************** //

  // ************** DEPARTMENT FORM CONFIGURATION *************** //
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const {
    control: dialogControl,
    handleSubmit: dialogSubmit,
    // formState: {
    //   // errors,
    //   // isSubmitSuccessful,
    //   // isSubmitting, isValid
    // },
    reset,
  } = useForm<IAdmissionFormInput>({
    defaultValues: {
      department_name: "",
      post_utme_date: "",
      cut_off_mark: "",
      waec_requirements: "",
      jamb_requirements: "",
    },
  });

  const departmentSubmit: SubmitHandler<IAdmissionFormInput> = (data) => {
    console.log(data);
    const final_data = {
      id: departmentTable.length + 1,
      ...data,
    };
    setDepartmentTable((prev) => [...prev, final_data]);
    reset();
    handleDialogClose();
  };

  return (
    <div className="max-w-screen-xl space-y-3">
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-gray-700"
        >
          Admissions Information
        </Typography>
        <Typography variant="body2" className="font-outfit text-gray-700">
          Provide information about the admissions process of the school
        </Typography>
      </div>
      <div className="max-w-screen-md space-y-3">
        <div className="space-y-1 pt-4">
          <Typography
            variant="body2"
            className="font-outfit font-semibold text-black"
          >
            Post UTME date
          </Typography>
          <Controller
            name="post_utme_date"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
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
            Application deadline
          </Typography>
          <Controller
            name="application_deadline"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                className="w-full placeholder-gray-600"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </div>
        <div className="space-y-1">
          <Typography
            variant="body2"
            className="font-outfit font-semibold text-black"
          >
            Application fee
          </Typography>
          <Controller
            name="application_fee"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="tel"
                className="w-full placeholder-gray-600"
                size="small"
                InputProps={{
                  startAdornment: <span>&#8358;</span>,
                }}
              />
            )}
          />
        </div>
        <div className="space-y-1">
          <Typography
            variant="body2"
            className="font-outfit font-semibold text-black"
          >
            How to apply
          </Typography>
          <Controller
            name="how_to_apply"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                rows={4}
                className="w-full placeholder-gray-600"
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
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="font-outfit text-black">
          Add department
        </DialogTitle>
        <div className="">
          <form onSubmit={dialogSubmit(departmentSubmit)}>
            <DialogContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Typography
                    variant="body2"
                    className="font-outfit font-semibold text-black"
                  >
                    Department name
                  </Typography>
                  <Controller
                    name="department_name"
                    control={dialogControl}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="w-full placeholder-gray-600"
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
                    Post UTME date
                  </Typography>
                  <Controller
                    name="post_utme_date"
                    control={dialogControl}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="date"
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
                    Cut off mark
                  </Typography>
                  <Controller
                    name="cut_off_mark"
                    control={dialogControl}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="tel"
                        className="w-full placeholder-gray-600"
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
                    Waec requirements
                  </Typography>
                  <Controller
                    name="waec_requirements"
                    control={dialogControl}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        multiline
                        rows={4}
                        className="w-full placeholder-gray-600"
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
                    Jamb requirements
                  </Typography>
                  <Controller
                    name="jamb_requirements"
                    control={dialogControl}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        multiline
                        rows={4}
                        className="w-full placeholder-gray-600"
                        size="small"
                      />
                    )}
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                variant="text"
                className="font-outfit font-semibold normal-case text-red-700 hover:bg-red-100"
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="font-outfit font-semibold normal-case text-main hover:bg-blue-100"
              >
                Add
              </Button>
            </DialogActions>
            <div className="mt-4 flex justify-end space-x-2"></div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default AdmissionsInfoForm;
