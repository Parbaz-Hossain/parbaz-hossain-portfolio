"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const services = [
    {
        num : "01",
        title: "Application Development",
        description: "Building high-performance desktop and web applications using modern frameworks like ASP.NET Core.",
        href: "/services/app-development"
    },
    {
        num : "02",
        title: "Database Development",
        description: "Designing optimized, secure, and scalable SQL databases with advanced query structuring, indexing.",
        href: "/services/database-development"
    },
    {
        num : "03",
        title: "Web Development",
        description: "Creating responsive, fast, and interactive websites with clean frontend architecture and powerful backend APIs.",
        href: "/services/web-development"
    },
    {
        num : "04",
        title: "Custom Software Development",
        description: "Engineering tailor-made software solutions that align with unique business needs, from enterprise ERPs.",
        href: "/services/custom-software-development"
    }
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            className="grid md:grid-cols-2 gap-6"
            >
                {services.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group p-4 border border-white/10 rounded-md hover:border-accent transition-all duration-500"
                        >
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link 
                                href={service.href}
                                className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >                                    
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>

                            {/* Title */}
                            <h2 className="text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                            {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-white/60">{service.description}</p>

                            {/* Border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                })}
            </motion.div>
      </div>
    </section>
  );
};

export default Services;
