'use client'
import { ArrowRight, ArrowRightFromLine, Plus, Rocket, Settings, Users } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const AccountDrop = () => {
  return (
    <motion.div initial={{ y: -15, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 500, damping: 22 }} className=" w-[260px] rounded-lg border border-[#F3F4F6] bg-white shadow-md  ">
      <div className=" p-[6px] ">
        <div className="flex w-full h-[32px] mb-[2px] px-2 py-1 hover:bg-gray-100 rounded-lg items-center">
          <span className="mr-3">
            <Settings size={18} />
          </span>
          <span>Show deleted slides</span>
        </div>
        <div className="flex w-full h-[32px] mb-[2px] px-2 py-1 hover:bg-gray-100 rounded-lg items-center">
          <span className="mr-3">
            <Users size={18} />
          </span>
          <span>Members</span>
        </div>
        <div className="     rounded-lg  hover:gradient-border  ">
        <div className="flex w-full h-[32px]    px-2 py-1  font-lato text-sm font-normal text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-fuchsia-600">
          <Rocket color="blue" size={16} className="mt-[2px]" />
          <span className="ml-2">Upgrade this workspace</span>
        </div>
        </div>
      </div>
      <div className="border-b    "></div>
      <div className=" p-[6px]  ">
        <div className="p-[6px] text-xs text-[#6F7387] mb-[3px]">
          Workspaces
        </div>
        <div className=" w-[248px] h-[76px] ">
          <div className=" h-[44px] w-full pb-1">
            <div className="px-2 py-1 flex items-center hover:bg-gray-100 rounded-lg">
              <span className=" h-6 w-6 mr-3 border bg-[#fba936] rounded-md text-white text-center text-sm ring-2 ring-offset-[0.5px] ring-[#6b53ff] items-center flex justify-center">
                A
              </span>
              <div className=" w-[172px] ">
                <div className="text-sm">Divyendra's team</div>
                <div className="text-xs text-[#6F7387]">Free plan</div>
              </div>
            </div>
          </div>
          <div className="h-8 px-2 py-1 flex items-center w-full rounded-lg hover:bg-gray-100">
            <span className="mr-3"><Plus size={18}/></span>
            <span>Create a new workspace</span>
          </div>
        </div>
      </div>
      <div className="border-b    "></div>
      <div className=" p-[6px] border-b ">
        <div className=" p-[6px] mb-1 text-[#6F7387] text-xs ">example@gmail.com</div>
        <div className="flex w-full h-[32px] mb-[2px] px-2 py-1 hover:bg-gray-100 rounded-lg items-center">
          <span className="mr-3">
          <Avatar className="w-7 h-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
          </span>
          <span>Accounts Settings</span>
        </div>
        <div className="flex w-full h-[32px] mb-[2px] px-2 py-1 hover:bg-[#fbf2f2] rounded-lg items-center text-[#E14747] ">
          <span className="mr-4 pl-1">
            <ArrowRightFromLine size={18} />
          </span>
          <span>Log out</span>
        </div>
      </div>
      <div className="flex w-[260px] h-[44px]    p-[6px] items-center ">
        <div className="flex items-center hover:bg-gray-100 rounded-lg h-8 px-2 py-1 w-full">
        <span className="mr-3">
          <ArrowRight size={18} />
        </span>
        <span>Open deskstop app</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountDrop;
