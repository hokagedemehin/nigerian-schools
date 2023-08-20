"use client";
import React from "react";
import { Typography } from "@/components/index";
import TopNavComp from "@/components/layout/TopNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import FederalUniversityCardComp from "@/components/dashboard/FederalUniversityCard";
import StateUniversityCardComp from "@/components/dashboard/StateUniversityCard";
import PolytechnicCardComp from "@/components/dashboard/PolytechnicCard";
import SecondarySchoolsCard from "@/components/dashboard/SecondarySchoolsCard";
import PrimarySchoolsCard from "@/components/dashboard/PrimarySchoolsCard";
import ALevelsSchoolCard from "@/components/dashboard/ALevelsSchoolsCard";
import NuserySchoolsCard from "@/components/dashboard/NuserySchoolsCard";
import RecentProjectTable from "@/components/dashboard/RecentProjectTable";
import ContributionPieChart from "@/components/dashboard/ContributionPieChart";

const DahsboardPage = () => {
  const title = (
    <div className="">
      <Typography
        variant="h6"
        className="font-outfit text-lg font-semibold text-black md:text-2xl"
      >
        Overview
      </Typography>
    </div>
  );

  return (
    <div className="">
      <TopNavComp leftSide={title} />
      <div className="mt-8">
        <div className="flex flex-col space-x-0 space-y-3 xl:flex-row xl:space-x-3 xl:space-y-0">
          <div className="flex flex-1 flex-col">
            {/* available projects */}
            <div className="mb-4">
              <Typography
                variant="h6"
                className="mb-7 font-outfit text-xl font-semibold text-black md:text-2xl"
              >
                Available Projects
              </Typography>
              <div className="flex justify-center md:justify-start">
                <div className="w-[20rem] sm:w-[35rem] md:w-[35rem] lg:w-[60rem]">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    freeMode={true}
                    className="mySwiper"
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    <SwiperSlide className="my-1">
                      <FederalUniversityCardComp />
                    </SwiperSlide>
                    <SwiperSlide className="my-1">
                      <StateUniversityCardComp />
                    </SwiperSlide>
                    <SwiperSlide className="my-1">
                      <PolytechnicCardComp />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* upcoming projects */}
            <div className="mb-6">
              <Typography
                variant="h6"
                className="mb-7 font-outfit text-xl font-semibold text-black md:text-2xl"
              >
                Upcoming Projects
              </Typography>
              <div className="flex justify-center md:justify-start">
                <div className="w-[20rem] opacity-50 sm:w-[35rem] md:w-[35rem] lg:w-[60rem]">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    freeMode={true}
                    className="mySwiper"
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    {/* secondary school */}
                    <SwiperSlide className="my-1">
                      <SecondarySchoolsCard />
                    </SwiperSlide>
                    {/* primary school */}
                    <SwiperSlide className="my-1">
                      <PrimarySchoolsCard />
                    </SwiperSlide>
                    {/* a level */}
                    <SwiperSlide className="my-1">
                      <ALevelsSchoolCard />
                    </SwiperSlide>
                    {/* nusery */}
                    <SwiperSlide className="my-1">
                      <NuserySchoolsCard />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {/* graph | awards */}
          <div className="">
            {/* graph	 */}
            <ContributionPieChart />
            {/* available awards */}
          </div>
        </div>
        {/* recent projects */}
        <div className="mt-8">
          <RecentProjectTable />
        </div>
      </div>
    </div>
  );
};

export default DahsboardPage;
