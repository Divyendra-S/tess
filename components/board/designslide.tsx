'use client'
import React , { Dispatch, SetStateAction } from "react";
import { Minus, ChevronDown } from "lucide-react";
import Image from "next/image";
import sideboard from "@/public/sideboard.avif";
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion";


interface ShareModalProps {
  setOpenComponent: Dispatch<SetStateAction<number>>;
}

const DesignSlide = ({setOpenComponent}:ShareModalProps) => {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.1, ease: "easeOut" }} className=" resize-y w-[264px] mr-[8px] mt-1 mb-3 border border-[#F3F4F6] shadow h-[870px] font-lato text-sm rounded-[8px]">
      <div className="flex py-3 pb-4 px-4 justify-between font-kanit h-[49px] font-medium text-lg border-b border-[#F3F4F6] ">
        <span>Slide</span>{" "}
        <span>
          <Minus onClick={()=>setOpenComponent(0)}/>
        </span>{" "}
      </div>
      <div className=" h-[100px] w-full p-4 flex flex-col justify-between border-b border-[#F3F4F6]">
        <div className=" h-6 ">Slide style</div>
        <div className=" h-8 w-[226px] rounded-lg border font-medium pl-[6px] p-1  ">
          <div className=" flex items-center">
            <div className=" bg-[#6B53FF]  flex items-center rounded-sm pr-[4px] gap-x-1 text-xs mr-[6px] ">
              <span className=" text-white my-[3px] mx-[6.25px] text-xs">
                P
              </span>
              <span className=" h-[6px] w-[6px] rounded-full bg-white "></span>
            </div>
            <span className=" w-[146px] pr-[6px]">Pitch: Gradient</span>
            <span className="ml-[8px]">
              {" "}
              <ChevronDown size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className=" h-[189px] w-full p-4 flex flex-col justify-between border-b border-[#F3F4F6]">
        <div className="flex w-[226px] justify-between items-center">
          <span className=" w-[190px]  ">
            <span className=" w-[156.9px] flex justify-between items-center ">
              <span className=" ">Background gradient</span>
              <ChevronDown size={14} />
            </span>
          </span>
          <span className=" rounded-full bg-[#6B53FF] w-6 h-6  "></span>
        </div>
        <div className="flex w-[226px] justify-between items-center h-8">
          <span className=" w-[190px]  ">
            <span className=" w-[156.9px] flex justify-between items-center">
              <span className=" text-[#5a5b5f] ">Start color</span>
            </span>
          </span>
          <span className=" rounded-full  bg-[#536aff] w-6 h-6  "></span>
        </div>
        <div className="flex w-[226px] justify-between items-center h-8">
          <span className=" w-[190px]  ">
            <span className=" w-[156.9px] flex justify-between items-center">
              <span className=" text-[#5a5b5f] ">Start color</span>
            </span>
          </span>
          <span className=" rounded-full bg-[#6B53FF] w-6 h-6  "></span>
        </div>
        <div className="flex w-[226px] justify-between items-center h-8">
          <span className=" w-[190px]  ">
            <span className=" w-[156.9px] flex justify-between items-center">
              <span className=" text-[#5c5d5e] ">Rotation</span>
            </span>
          </span>
          <span className=" rounded-lg border h-8 w-[60px] px-[9px] "></span>
        </div>
      </div>
      <div className="flex p-4 flex-col justify-between h-[101px] border-b border-[#F3F4F6]">
        <div className="flex justify-between w-[226px] ">
          <span>Background image</span>
          <Image
            src={sideboard}
            width={34}
            height={28}
            alt="bg"
            className=" rounded-sm"
          />
        
        </div>
        <div className=" border rounded-lg flex text-center h-8 justify-center items-center text-[#5a5b5f]"> Edit background image</div>
      </div>
      <div className="p-4">
        <div className="h-8 w-[226px] flex justify-between items-center ">
            <span className="text-[#5a5b5f]">Slide number</span>
            <Switch />
        </div>
      </div>
    </motion.div>
  );
};

export default DesignSlide;
