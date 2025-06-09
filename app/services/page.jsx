"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const services = [
    {
        num : "01",
        title: "Web Development",
        description: "Building responsive and dynamic websites using modern technologies.",
        href: "/services/web-development"
    },
    {
        num : "02",
        title: "Mobile App Development",
        description: "Creating user-friendly mobile applications for iOS and Android.",
        href: "/services/mobile-app-development"
    },
    {
        num : "03",
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces and enhancing user experiences.",
        href: "/services/ui-ux-design"
    },
    {
        num : "04",
        title: "SEO Optimization",
        description: "Improving website visibility and search engine rankings.",
        href: "/services/seo-optimization"
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
