"use client";
import Image from "next/image";
import React, { useState } from "react";
import unsplash from "../../public/unsplash.jpeg";
import unsplash1 from "@/public/unsplash1.jpeg";

const MainContent = () => {
  const [toggle, setToggle] = useState();
  const ByMe = [
    {
      title: "Welcome to Pitch",
      img: unsplash,
      updatedOn: "Feb 20, 2024",
      In: "Private",
    },
    {
      title: "Set up your Workspace",
      img: unsplash1,
      updatedOn: "Feb 19,2024",
      In: "Private",
    },
  ];
  const ByEveryone = [
    {
      title: "",
      img: unsplash,
      updatedOn: "",
      In: "Private",
    },
    {
      title: "",
      img: unsplash1,
      updatedOn: "",
      In: "Private",
    },
    {
      title: "",
      img: unsplash1,
      updatedOn: "",
      In: "Private",
    },
  ];

  const recents = [
    {
      heading: "Start new presentation",
      message: "Choose from 100+ templates",
      logo: "",
    },
    {
      heading: "Start with AI",
      message: "Create from a prompt",
      logo: "",
    },
    {
      heading: "Import presentation",
      message: "Add PowerPoint files to pitch",
      logo: "",
    },
  ];
  return (
    <section className="px-10 py-2  font-lato">
      <div className=" max-w-screen-lg ">
        <div className="mt-6 font-sen font-bold leading-9 size-6 text-2xl">
          Recents
        </div>
        <div className="mt-6 mb-6 lg:flex grid grid-cols-3 gap-x-4  ">
          {recents.map((item, i) => (
            <div
              className="flex flex-col border p-3 cursor-pointer pr-5 md:pr-3  rounded-lg   "
              key={i}
            >
              <div className="text-sm truncate">{item.heading}</div>
              <div className=" text-tiny text-[#6F7387] hidden md:block truncate">
                {item.message}
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-x-4 h-[33px] w-[170px] rounded-lg  text-sm   border">
          <button className=" rounded-lg border border-white w-[64px]  bg-gray-200  text-center">
            <span className="">By me</span>
          </button>

          <button className="  ">
            <span>By everyone</span>
          </button>
        </div>
      </div>
      <div className=" mt-4 grid md:grid-cols-2 xl:grid-cols-3  gap-4 2xl:grid-cols-4">
        {ByMe.map((item, i) => (
          <div key={i} className="flex flex-col">
            <div className=" aspect-video bg-black  rounded-lg overflow-hidden border  relative">
              <Image
                src={item.img}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="placeholder"
                className=" "
              />
            </div>
            <div className=" py-4 text-sm font-semibold">
              <span className=" w-full">{item.title}</span>
              <div className="  text-xs flex items-center  mt-[5px] font-light">
                <span className=" ">
                  In <span className=" text-[#6B53FF] font-normal ">{item.In} </span>
                </span>
                <div className="h-[2px] w-[2px]  rounded-full bg-black     mx-2"></div>
                <span className=" text-gray-900"> Updated {item.updatedOn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContent;
