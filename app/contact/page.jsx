"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88) 01740658882",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "md.parvezcse@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dhaka, Bangladesh",
  },
];

import { motion } from "framer-motion";
import React, { useState } from "react";


const Contact = () => {

const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [service, setService] = useState("");
const [message, setMessage] = useState("");

// This function handles the form submission via a POST request to the API endpoint.
const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    }),
  });

  const data = await result.json();

  if (data.success) {
    alert('✅ Message sent successfully!');
  } else {
    alert('❌ Failed to send message.');
  }
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[50%] order-2 xl:order-none">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil
                        sapiente pariatur id totam.
                        </p>

                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            <Input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        {/* select */}
                        <Select onValueChange={(val) => setService(val)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a service</SelectLabel>
                              <SelectItem value="Backend">Backend</SelectItem>
                              <SelectItem value="Frontend">Frontend</SelectItem>
                              <SelectItem value="Full-Stack">Full-Stack</SelectItem>
                              <SelectItem value="Web Development">Web Development</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        {/* textarea */}
                        <Textarea
                          className="h-[100px]"
                          placeholder="Type your message here."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />

                        {/* btn */}
                        <Button size="md" className="max-w-40">
                          Send message
                        </Button>
                    </form>
                </div>

                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                  {/* Additional info content goes here */}
                  <ul className="flex flex-col gap-10">
                    {info.map((item, index) => (
                      <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>
    </motion.section>
  );
};

// This is a simple contact page component for a Next.js application.
export default Contact;