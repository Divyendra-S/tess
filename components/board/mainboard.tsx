import React from "react";
import pitchimage from "@/public/pitchimage.avif";
import Image from "next/image";
import sideboard from "@/public/sideboard.avif";
import { BsThreeDots } from "react-icons/bs";

const Mainboard = () => {
  return (
    <div className=" font-lato ">
      <div className=" ml-[4px] mt-[4px] mr-[16px] pb-[54px]  w-full flex flex-col items-center">
        <Image
          src={pitchimage}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="placeholder"
        />
        <div className=" text-sm p-1 mt-[10px] rounded-md border shadow  py-[6px] ">
          <div className=" flex">
            <div className=" px-2">
              <button className="flex items-center gap-x-[6px]">
                <div className=" bg-[#6B53FF]  flex items-center rounded-sm pr-1 gap-x-1 text-xs ">
                  <span className=" text-white my-[3.75px] mx-[6.25px] ">
                    P
                  </span>
                  <span className=" h-[6px] w-[6px] rounded-full bg-white "></span>
                </div>
                <span> Slide style </span>
              </button>
            </div>
            <div className=" px-2 flex">
              <button className="flex items-center gap-x-[6px]">
                <span className=" w-[18px] h-[18px] bg-[#6B53FF] rounded-full "></span>
                <span>Slide color</span>
              </button>
            </div>
            <div className=" px-2 flex">
              <button className="flex items-center gap-x-[6px]">
                <Image
                  src={sideboard}
                  width={34}
                  height={28}
                  alt="bg"
                  className=" rounded-sm"
                />
                <span>Background image</span>
              </button>
            </div>
            <div className=" px-2 flex">
              <button className="flex items-center gap-x-[6px]">
                <span>
                  <BsThreeDots className=" w-5 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainboard;
