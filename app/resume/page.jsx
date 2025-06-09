"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaAngular} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about= {
    title: "About Me",
    description: "I am a passionate software engineer with a focus on desktop & web application development. I enjoy creating dynamic and responsive web applications using modern technologies.",
    info:[
        {
            fieldName : "Name",
            fieldValue: "Parbaz Hossain"
        },
        {
            fieldName : "Phone",
            fieldValue: "+8801740658882"
        },
        {
            fieldName : "Email",
            fieldValue: "md.parvezcse@gmail.com"
        },
        {
            fieldName : "Experience",
            fieldValue: "4.6 Years"
        },
        {
            fieldName : "Nationality",
            fieldValue: "Bangladeshi"
        },
        {
            fieldName : "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName : "Languages",
            fieldValue: "English, Bengali"
        },
        {
            fieldName : "Location",
            fieldValue: "Dhaka, Bangladesh"
        }
    ]
};

// Experience data
const experience = {
    icon : "/assets/resume/badge.svg",
    title: "My Experience",
    description: "I have worked on various projects, ranging from small web applications to large-scale enterprise solutions. My experience includes both front-end and back-end development, with a strong focus on user experience and performance.",
    jobs: [
        {
            company: "Pinovation Tech Ltd.",
            position: "Jr. Software Engineer",
            duration: "Oct 2020 - July 2023",
            description: "Worked on developing and maintaining web applications using ASP.NET Core and React. Collaborated with cross-functional teams to deliver high-quality software solutions."
        },
        {
            company: "Systech Digital Limited",
            position: "Software Engineer",
            duration: "Aug 2023 - September 2024",
            description: "Developed and maintained web applications using ASP.NET Core and Angular. Implemented RESTful APIs and integrated third-party services."
        },
        {
            company: "Empowering Energy",
            position: "Software Engineer",
            duration: "October 2024 - Present",
            description: "Design and developing web applications using ASP.NET Core and Microservices architecture. Focused on improving code quality and implementing best practices."
        }
    ]
};

// Education data
const education = {
    icon : "/assets/resume/education.svg",
    title: "My Education",
    description: "I hold a Bachelor's degree in Computer Science and Engineering from Uttara University. My education has provided me with a strong foundation in software development principles and practices.",
    degrees: [
        {
            institution: "Uttara University",
            degree: "B.Sc in Computer Science and Engineering",
            duration: "2015 - 2019",
            description: "Graduated with a focus on software engineering and web development."
        },
        {
            institution: "Narsingdi Model College",
            degree: "H.SC in Science",
            duration: "2011 - 2013",
            description: "Completed higher secondary education with a focus on science subjects."
        },
        {
            institution: "Kaliganj R.R.N. Govt. Pilot High School",
            degree: "S.S.C in Science",
            duration: "2011",
            description: "Completed secondary education with a focus on science subjects."
        },
        {
            institution: "Professional Application Development in ASP.NET MVC and Core",
            degree: "Certificate in ASP.NET MVC and Core",
            duration: "2019",
            description: "Completed a professional course in ASP.NET MVC and ASP.NET Core, gaining hands-on experience in web application development." 
        }
    ]
};

// Skills data
const skills = {
    title: "My Skills",
    description: "I have a diverse skill set that includes front-end and back-end development, UI/UX design, and project management. I am proficient in various programming languages and frameworks, and I continuously strive to learn new technologies.",
    skillList: [    
        {
            icon:<FaHtml5 />,
            name: "HTML5"
        },
        {
            icon:<FaCss3 />,
            name: "CSS3"
        },
        {
            icon:<FaJs />,
            name: "JavaScript"
        },
        {
            icon:<FaReact />,
            name: "React.js"
        },
        {
            icon: <FaAngular />,
            name: "Angular"
        }
    ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1 ,
         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
    }}
     
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
            <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                { /* Tabs Content */}
                <div className="min-h-[70vh] w-full">
                    { /* Experience Section */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center lg:text-left h-full">
                            <p className="text-4xl font-bold">{experience.title}</p>
                            <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                            {experience.description}
                            </p>               

                            <ScrollArea className="h-[280px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                                    {experience.jobs.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>                   
                        </div>
                    </TabsContent>

                    { /* Education Section */}
                   <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center lg:text-left">
                            <p className="text-4xl font-bold">{education.title}</p>
                            <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                            {education.description}
                            </p>               

                            <ScrollArea className="h-[280px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.degrees.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>                   
                        </div>
                    </TabsContent>

                    { /* Skills Section */}
                    <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                            </div>

                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                {skill.icon}
                                            </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    
                    { /* About Section */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                   return(
                                    <li 
                                    key= {index}
                                    className="flex items-center justify-center xl:justify-start gap-4"
                                    >
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                   );
                                })}
                            </ul>
                        </div>
                    </TabsContent> 
                </div>
            </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
