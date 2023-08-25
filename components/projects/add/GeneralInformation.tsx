" use client";
import React, { useCallback, useState } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { Typography, Select, MenuItem, TextField } from "@/components/index";
import { INewFormInput } from "@/interface/FormTypes";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const GeneralInformationForm = ({
  control,
  errors,
}: {
  control: Control<INewFormInput>;
  errors: FieldErrors<INewFormInput>;
}) => {
  const [schoolLogo, setSchoolLogo] = useState<any>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setSchoolLogo(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [],
      // "image/png": [".png"],
      // "image/jpeg": [".jpeg", ".jpg"],
      // "image/gif": [".gif"],
      // "image/svg+xml": [".svg"],
      // "image/webp": [".webp"],
    },
    onDrop,
    maxFiles: 1,
    multiple: false,
  });
  return (
    <div className="max-w-screen-md space-y-3">
      {/* type */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Type of School
        </Typography>
        <Controller
          control={control}
          name="school_type"
          render={({ field }) => (
            <Select
              {...field}
              className="focus:shadow-outline h-10 w-fit rounded-lg border px-3 text-base placeholder-gray-600 "
              size="small"
            >
              <MenuItem value="federal">Federal University</MenuItem>
              <MenuItem value="state">State University</MenuItem>
              <MenuItem value="poly">Polytechnic</MenuItem>
              <MenuItem value="private">Private University</MenuItem>
            </Select>
          )}
        />
      </div>
      {/* name */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Name
        </Typography>
        <Controller
          control={control}
          name="school_name"
          rules={{
            required: "School name is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Name"
              size="small"
              // error={errors?.school_name?.message ? true : false}
              error={!!errors?.school_name}
              helperText={errors?.school_name?.message}
            />
          )}
        />
      </div>
      {/* location */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Location
        </Typography>
        <Controller
          control={control}
          name="school_location"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Location"
              size="small"
            />
          )}
        />
      </div>
      {/* acronym */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Acronym
        </Typography>
        <Controller
          control={control}
          name="school_acronym"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Acronym"
              size="small"
            />
          )}
        />
      </div>
      {/* logo */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Logo
        </Typography>
        <div
          {...getRootProps()}
          className="flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300"
        >
          <input {...getInputProps()} />
          {isDragAccept && (
            <Typography variant="body2" className="font-outfit text-green-600">
              Drop the files here ...
            </Typography>
          )}
          {isDragReject && (
            <p className="font-outfit text-red-600">
              File type not accepted & only one image is allowed, sorry!
            </p>
          )}
          {!isDragActive && (
            <Typography variant="body2" className="font-outfit text-gray-600">
              {/* Drag 'n' drop some files here, or click to select files */}
              Drag 'n' drop logo image here, or click to select image
            </Typography>
          )}
        </div>
        {schoolLogo?.length > 0 && (
          <div className="pt-4">
            <Image
              // src={schoolLogo}
              src={schoolLogo[0]?.preview}
              alt="school logo"
              height={100}
              width={100}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      {/* year of establishment */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Year of Establishment
        </Typography>
        <Controller
          control={control}
          name="year_of_establishment"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Year of Establishment"
              size="small"
              type="tel"
            />
          )}
        />
      </div>
      {/* school url */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School URL
        </Typography>
        <Controller
          control={control}
          name="school_url"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School URL"
              size="small"
            />
          )}
        />
      </div>
      {/* school email */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Email
        </Typography>
        <Controller
          control={control}
          name="school_email"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Email"
              size="small"
            />
          )}
        />
      </div>
      {/* number of faculties */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Number of Faculties
        </Typography>
        <Controller
          control={control}
          name="number_of_faculties"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Number of Faculties"
              size="small"
              type="tel"
            />
          )}
        />
      </div>
      {/* number of departments */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Number of Departments
        </Typography>
        <Controller
          control={control}
          name="number_of_departments"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Number of Departments"
              size="small"
              type="tel"
            />
          )}
        />
      </div>
      {/* number of students */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Number of Students
        </Typography>
        <Controller
          control={control}
          name="number_of_students"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Number of Students"
              size="small"
              type="tel"
            />
          )}
        />
      </div>
      {/* name of vice chancellor */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Name of Vice Chancellor
        </Typography>
        <Controller
          control={control}
          name="name_of_vice_chancellor"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Name of Vice Chancellor"
              size="small"
            />
          )}
        />
      </div>
      {/* currenct session */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Current Session
        </Typography>
        <Controller
          control={control}
          name="current_session"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter Current Session"
              size="small"
              type="tel"
            />
          )}
        />
      </div>
      {/* school mission */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Mission
        </Typography>
        <Controller
          control={control}
          name="school_mission"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Mission"
              size="small"
              multiline
              rows={4}
            />
          )}
        />
      </div>
      {/* school vision */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Vision
        </Typography>
        <Controller
          control={control}
          name="school_vision"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Vision"
              size="small"
              multiline
              rows={4}
            />
          )}
        />
      </div>
      {/* school motto */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          School Motto
        </Typography>
        <Controller
          control={control}
          name="school_motto"
          render={({ field }) => (
            <TextField
              {...field}
              className="w-full  placeholder-gray-600"
              placeholder="Enter School Motto"
              size="small"
            />
          )}
        />
      </div>
    </div>
  );
};

export default GeneralInformationForm;
