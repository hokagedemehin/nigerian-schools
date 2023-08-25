" use client";
import React from "react";
import { Controller, Control } from "react-hook-form";
import { Typography, TextField } from "@/components/index";
import { INewFormInput } from "@/interface/FormTypes";

const CGPAInfoForm = ({ control }: { control: Control<INewFormInput> }) => {
  return (
    <div className="max-w-screen-sm space-y-3">
      {/* Grading System */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Grading System
        </Typography>
        <Controller
          name="grading_system"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Grading System"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.grading_system}
              // helperText={errors.grading_system?.message}
            />
          )}
        />
      </div>
      {/* First class CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          First class CGPA
        </Typography>
        <Controller
          name="first_class_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter First class CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.first_class_cgpa}
              // helperText={errors.first_class_cgpa?.message}
            />
          )}
        />
      </div>
      {/* Second class upper CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Second class upper CGPA
        </Typography>
        <Controller
          name="second_class_upper_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Second class upper CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.second_class_upper_cgpa}
              // helperText={errors.second_class_upper_cgpa?.message}
            />
          )}
        />
      </div>
      {/* Second class lower CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Second class lower CGPA
        </Typography>
        <Controller
          name="second_class_lower_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Second class lower CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.second_class_lower_cgpa}
              // helperText={errors.second_class_lower_cgpa?.message}
            />
          )}
        />
      </div>
      {/* Third class CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Third class CGPA
        </Typography>
        <Controller
          name="third_class_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Third class CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.third_class_cgpa}
              // helperText={errors.third_class_cgpa?.message}
            />
          )}
        />
      </div>
      {/* Pass class CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Pass class CGPA
        </Typography>
        <Controller
          name="pass_class_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Pass class CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.pass_class_cgpa}
              // helperText={errors.pass_class_cgpa?.message}
            />
          )}
        />
      </div>
      {/* Fail class CGPA */}
      <div className="flex flex-col space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          Fail class CGPA
        </Typography>
        <Controller
          name="fail_class_cgpa"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter Fail class CGPA"
              className="w-full placeholder-gray-600"
              size="small"
              // error={!!errors.fail_class_cgpa}
              // helperText={errors.fail_class_cgpa?.message}
            />
          )}
        />
      </div>
      {/* witdraw */}
      <div className="space-y-1">
        <Typography
          variant="body2"
          className="font-outfit font-semibold text-black"
        >
          When are you told to withdraw?
        </Typography>
        <Controller
          name="withdraw"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Enter details..."
              className="w-full placeholder-gray-600"
              size="small"
              multiline
              rows={3}
              // error={!!errors.withdraw}
              // helperText={errors.withdraw?.message}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CGPAInfoForm;
