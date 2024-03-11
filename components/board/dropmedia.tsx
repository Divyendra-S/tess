"use client";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Dropmedia = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0,x:"-50%" }}
      animate={{ y: 0, opacity: 1 ,x:"-50%" }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      className=" w-[684px] font-lato h-[420px] translate-x-[-50%] left-1/2 border translate-y-[-2px] bg-white shadow  rounded-xl text-sm"
    >
      <div className=" flex h-full">
        <section className=" w-[204px]   border-r h-full ">
          <div className=" h-[364px] w-full p-3 ">
            <div>
              <div className=" pl-[6px] text-xs flex items-center h-9 text-[#6F7387]">
                Library
              </div>
              <button className=" my-[3px] pl-[6px] pr-4 w-full flex rounded h-9 items-center">
                <span className=" h-6 w-6 mr-3 border bg-[#fba936] rounded-sm text-white text-center text-xs items-center flex justify-center">
                  A
                </span>
                <span className=" ">Images</span>
              </button>
              <button className=" mt-[3px] pl-[6px] pr-4 w-full flex rounded h-9 items-center">
                <span className=" h-6 w-6 mr-3 border bg-[#fba936] rounded-sm text-white text-center text-xs items-center flex justify-center">
                  A
                </span>
                <span className=" ">Videos</span>
              </button>
              <div>
                <div className=" h-9 flex items-center pl-[6px] text-xs text-[#89898d] ">
                  Integrations
                </div>
                <div className=" flex items-center h-9 pl-[6px] hover:bg-slate-300  my-[3px] ">
                  <span className=" h-6 w-6 flex items-center justify-center rounded border mr-3">
                    {" "}
                    <Image
                      src="https://cdn.icon-icons.com/icons2/3261/PNG/512/unsplash_logo_icon_206651.png"
                      height={18}
                      width={18}
                      alt="unsplash"
                    />{" "}
                  </span>
                  <span>Unsplash</span>
                </div>
                <div className=" flex items-center h-9 pl-[6px] my-[3px]">
                  <span className=" h-6 w-6 flex items-center justify-center rounded border mr-3">
                    <Image
                      src="https://a.slack-edge.com/80588/img/plugins/giphy/service_512.png"
                      height={22}
                      width={22}
                      alt="Giphy"
                    />
                  </span>
                  <span> Giphy</span>
                </div>
                <div className=" flex items-center h-9 pl-[6px] my-[3px]">
                  <span className=" h-6 w-6 flex items-center justify-center rounded border mr-3">
                    <Image
                      src="https://images.opencollective.com/icons8/7fa1641/logo/256.png"
                      height={24}
                      width={24}
                      alt="Giphy"
                    />
                  </span>
                  <span>Icons8</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[56px] w-full p-3">
            <button className=" bg-[#6B53FF] rounded-lg h-full w-full flex justify-center items-center text-white">
              Upload media{" "}
            </button>
          </div>
        </section>
        <section className=" w-[480px] ">
          <div className=" w-full py-3 px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-600" />
              </div>
              <input
                className="w-full py-1 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B53FF] placeholder-gray-400"
                placeholder="Search for logos, photos and other images"
              />
            </div>
            <div className=" pt-[46px] flex flex-col items-center ">
              <Image
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127818.jpg?w=2000&t=st=1709911909~exp=1709912509~hmac=493b59052feb187463f5431204406e706c51b40b77e3345b28c641e42fba3d3d"
                height={200}
                width={250}
                alt="empty"
              />
              <div className="mt-6 text-[#3F4250] ">
                Upload images to your library so everyone on{" "}
              </div>
              <div>Your team can use them</div>
              <div className="mt-[6px] text-xs text-[#6B53FF] hover:bg-gray-100 rounded px-[6px] py-1">
                Go to library
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Dropmedia;
