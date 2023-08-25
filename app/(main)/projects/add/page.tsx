"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";
import { useForm, SubmitHandler } from "react-hook-form";
import GeneralInformationForm from "@/components/projects/add/GeneralInformation";
import { INewFormInput } from "@/interface/FormTypes";
import AdmissionsInfoForm from "@/components/projects/add/AdmissionsInfo";
import CGPAInfoForm from "@/components/projects/add/CGPAInfo";
import FacultiesInfoForm from "@/components/projects/add/FacultiesInfo";

const AddProjectPage = () => {
  // ***** REACT HOOK FORM ***** //
  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isSubmitSuccessful,
      // isSubmitting, isValid
    },
    reset,
  } = useForm<INewFormInput>({
    defaultValues: {
      school_type: "",
      school_name: "",
      school_acronym: "",
      // school_logo: "",
      school_motto: "",
      school_location: "",
      year_of_establishment: "",
      school_url: "",
      school_email: "",
      number_of_departments: "",
      number_of_faculties: "",
      number_of_students: "",
      name_of_vice_chancellor: "",
      current_session: "",
      school_mission: "",
      school_vision: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        school_type: "",
        school_name: "",
        school_acronym: "",
        // school_logo: "",
        school_motto: "",
        school_location: "",
        year_of_establishment: "",
        school_url: "",
        school_email: "",
        number_of_departments: "",
        number_of_faculties: "",
        number_of_students: "",
        name_of_vice_chancellor: "",
        current_session: "",
        school_mission: "",
        school_vision: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<INewFormInput> = (data) => {
    console.log(data);
  };

  const title = (
    <div className="">
      <Typography variant="h6" className="font-outfit text-black">
        Add School
      </Typography>
    </div>
  );
  const [selectedForm, setSelectedForm] = useState("general");
  return (
    <div>
      <TopNavComp leftSide={title} />
      <div className="">
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:mt-8">
          <Button
            className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
              selectedForm === "general"
                ? "bg-mainHover text-white hover:bg-mainHover "
                : "bg-blue-100 text-black hover:bg-blue-200"
            }`}
            onClick={() => setSelectedForm("general")}
            size="small"
          >
            General Information
          </Button>
          <Button
            className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
              selectedForm === "admissions"
                ? "bg-mainHover text-white hover:bg-mainHover "
                : "bg-blue-100 text-black hover:bg-blue-200"
            }`}
            onClick={() => setSelectedForm("admissions")}
            size="small"
          >
            Admissions
          </Button>
          <Button
            className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
              selectedForm === "cgpa"
                ? "bg-mainHover text-white hover:bg-mainHover "
                : "bg-blue-100 text-black hover:bg-blue-200"
            }`}
            onClick={() => setSelectedForm("cgpa")}
            size="small"
          >
            CGPA calculation
          </Button>
          <Button
            className={`rounded-lg border border-main px-4  text-sm font-semibold normal-case  ${
              selectedForm === "faculties"
                ? "bg-mainHover text-white hover:bg-mainHover "
                : "bg-blue-100 text-black hover:bg-blue-200"
            }`}
            onClick={() => setSelectedForm("faculties")}
            size="small"
          >
            Faculties
          </Button>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            {selectedForm === "general" && (
              <GeneralInformationForm control={control} errors={errors} />
            )}
            {selectedForm === "admissions" && (
              <AdmissionsInfoForm control={control} />
            )}
            {selectedForm === "cgpa" && <CGPAInfoForm control={control} />}
            {selectedForm === "faculties" && (
              <FacultiesInfoForm control={control} />
            )}
            <div className="flex pt-6">
              <Button
                type="submit"
                className="w-full transform  rounded-lg bg-main font-bold normal-case text-white transition duration-500 ease-in-out hover:bg-mainHover md:w-[20rem]"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjectPage;
