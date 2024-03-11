"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ListChecks, Settings } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const DropNotification = () => {
  const [active, setActive] = useState(1);
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      className=" h-[330px] w-[480px] bg-white rounded-xl border border-[#F3F4F6] shadow-md text-sm font-lato"
    >
      <div className=" px-4 w-full h-[56px] flex justify-between border-b">
        <div className="flex justify-between h-full items-center w-[120px] ">
          {" "}
          <span
            className={cn(
              "border-b-2 border-transparent hover:border-b-2 hover:border-[#c2baf5] py-4 cursor-default",
              {
                "text-[#6B53FF] border-b-2 hover:border-[#6B53FF] border-[#6B53FF]":
                  active == 1,
              }
            )}
            onClick={() => setActive(1)}
          >
            Inbox
          </span>
          <span
            className={cn(
              "border-b-2 border-transparent hover:border-b-2 hover:border-[#c2baf5] py-4 cursor-default",
              {
                "text-[#6B53FF] border-b-2 hover:border-[#6B53FF] border-[#6B53FF]":
                  active == 2,
              }
            )}
            onClick={() => setActive(2)}
          >
            Subscribed
          </span>
        </div>
        <div className=" h-full items-center flex gap-2">
          <span className=" hover:bg-[#f4f2f2] rounded-md p-1 ">
            <ListChecks size={22} />
          </span>
          <span className=" hover:bg-[#f4f2f2] rounded-md p-1 ">
            <Settings size={21} />
          </span>
        </div>
      </div>
      <div className=" p-[48px] flex flex-col items-center">
        <div className="mb-2">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/026/991/692/original/3d-render-of-purple-notification-bell-icon-for-ui-ux-web-mobile-apps-social-media-ads-design-png.png"
            height={82}
            width={120}
            alt="bell"
          />
        </div>
        <div className="text-xl font-sen font-medium mb-2">
          You're all up to date
        </div>
        <div className="text-sm text-[#636672]">
          New notification will appear here whenever there's an activity
        </div>
      </div>
    </motion.div>
  );
};

export default DropNotification;
