"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/worksliderbtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Real Estate ERP",
    description:
      "With various modules a fully custom solution for Real Estate business. There are many modules as like (Budgetary Control, Procurement, Sales, Accounts & Finance) etc.",
    stack: [
      { name: "C#" },
      { name: "ASP.NET Web Forms" },
      { name: "MSSQL Server" },
      { name: "JavaScript" },
      { name: "RDLC Reports" }
    ],
    image: "/assets/work/REERP1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "HRM & PAYROLL",
    description:
      "A complete solution for HRM & Payroll with various functionally as like Appointment, Interview, Attendance, Payroll, Leave & Absent etc.",
    stack: [    
      { name: "C#" },
      { name: "ASP.NET Web Forms" },
      { name: "MSSQL Server" },
      { name: "JavaScript" },
      { name: "RDLC Reports" }
    ],
    image: "/assets/work/HRP2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Logistics Freight Forwarding Application",
    description:
      "Logistics App is a Freight Forwarding management application based on Air Freight, Sea Freight or Road Freight.",
    stack: [    
      { name: "C#" },
      { name: "ASP.NET Core" },
      { name: "MSSQL Server" },
      { name: "Angular" },
      { name: "Restful API" },
      { name : "Azure DevOps" },
    ],
    image: "/assets/work/LFFA1.png",
    live: "",
    github: "",
  },
   {
    num: "04",
    category: "backend",
    title: "Supply Chain Management (SCM) Module",
    description:
      "A complete solution for HRM with various functionally as like Appointment, Attendance, Payroll, Leave & Absent etc.",
    stack: [    
      { name: "C#" },
      { name: "ASP.NET Core" },
      { name: "MSSQL Server" },
      { name: "Entity Framework" },
      { name: "Restful API" },
      { name : "Git" },
    ],
    image: "/assets/work/SCM1.png",
    live: "",
    github: "",
  }
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay : 2.4, duration: 0.4, ease: "easeIn" }
       }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[425px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                        </div>
                        {/* project category */}
                        <h2 className="text-[34px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.title} 
                        </h2>
                        {/* project description */}
                        <p className="text-white/50">{project.description}</p>
                        {/* stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return( 
                                    <li key={index} className="text-md text-accent">
                                        {item.name}
                                        {/* Remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                );
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">                            
                            {/* Live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            </Link>
                             {/* Github project button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Github repository</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[427px]"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                        return <SwiperSlide key={index} className="w-full">
                            <div className="h-[380px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image
                                    src={project.image}
                                    fill
                                    className="object-cover"
                                    alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>;
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition"
                        />
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
  );
};

export default Work;
