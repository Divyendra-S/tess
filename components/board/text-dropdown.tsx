"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

const TextDropdown = () => {
  

  const textSizes = [
    "Title",
    "Heading",
    "Subheadline",
    "Normal Text",
    "Small Text",
    
  ];

  return (
    <div className="absolute">
      
      
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          transition={{ type: "spring", stiffness: 450, damping: 22 }}
          className=" mt-2 w-[180px] h-[289px] bg-white border rounded-lg shadow-lg overflow-y-auto p-1"
        >
            <div className="px-[6px] pt-[3px] pb-[6px] flex justify-between w-[172px] h-[33px] text-xs mt-1">
                <span>Text styles</span>
                <span>Edit</span>
            </div>
          <ul className="">
            {textSizes.map((size, index) => (
              <li
                key={index}
                className={`px-2 py-1 mb-[2px]  hover:bg-gray-100 rounded-lg cursor-pointer ${
                  size === "Title"
                    ? "text-3xl"
                    : size === "Headline"
                    ? "text-xl"
                    : size === "Subheadline"
                    ? "text-md"
                    : size === "Normal Text"
                    ? "text-sm"
                    : size === "Small Text"
                    ? "text-xs"
                    : `text-${size}`
                }`}
              >
                {size}
              </li>
            ))}
          </ul>
          <div className="px-2 py-1 mb-[2px]  hover:bg-gray-100 rounded-lg cursor-pointer flex items-center">
            <span className=" w-[4px] h-[4px] rounded-full mr-[6px] bg-black "></span>
            <span className="text-sm">Bullet list</span>
          </div>
          <div className="px-2 py-1 mb-[2px]  hover:bg-gray-100 rounded-lg cursor-pointer flex items-center">
            <span className="  mr-[6px] text-sm ">1.</span>
            <span className="text-sm">Number list</span>
          </div>
        </motion.div>
      
    </div>
  );
};

export default TextDropdown;