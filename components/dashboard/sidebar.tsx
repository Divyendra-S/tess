"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import pitch from "@/public/pitch...png";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  Bell,
  Rocket,
  Search,
  Clock3,
  GanttChartSquare,
  Link2,
  UserRoundPlus,
  Download,
  UsersRound,
  FolderPlus,
  CircleUserRound,
  Trash,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import AccountDrop from "./account-drop";
import DropNotification from "../board/dropnotification";


type Handler = (event: MouseEvent) => void;

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}


const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [IsNotification, setIsNotification] = useState(false);
  const [IsAccount, setIsAccount] = useState(false);


  const notificationRef = useRef<HTMLDivElement>(null);
  useOutsideClick(notificationRef, () => setIsNotification(false));

  const accountRef = useRef<HTMLDivElement>(null);
  useOutsideClick(accountRef, () => setIsAccount(false));

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function toggleClose() {
    setIsClose(!isClose);
  }

  const Sidebart = [
    {
      name: "Recents",
      link: "/recent",
      id: 1,
      logo: <Clock3 size={20} />,
    },
    {
      name: "Manage Library",
      link: "/manageLibrary",
      id: 2,
      logo: <GanttChartSquare size={20} />,
    },
    {
      name: "Links overview",
      link: "",
      id: 3,
      logo: <Link2 size={20} />,
    },
  ];

  const handleItemClick = (itemId: number) => {
    setValue(itemId);
  };

  return (
    <>
      <div className="flex flex-col justify-between w-[264px] h-screen font-lato border border-r-1 ">
        <section className="p-3 pt-2 flex-col font-[400] font-lato text-[#3f4250] text-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center relative " ref={accountRef}>
                <button
                  className={cn(
                    "flex items-center hover:bg-gray-100 rounded-lg p-1",
                    {
                      "bg-gray-100": IsAccount,
                    }
                  )}
                  onClick={() => setIsAccount(!IsAccount)}
                >
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <span className="ml-2 text-sm font-lato font-semibold">
                    Divyendra
                  </span>
                  <ChevronDown
                    size={16}
                    color="black"
                    className="ml-1 mt-[2px]"
                  />
                </button>

                {IsAccount && (
                  <div  className="absolute top-[44px] z-[999] ">
                    <AccountDrop />
                  </div>
                )}
              </div>
            </div>
            <div ref={notificationRef} className="relative">
              <div
                className={cn(
                  " w-[34px] h-[34px] hover:bg-gray-100 rounded-md  flex justify-center items-center  ",
                  {
                    "bg-gray-100": IsNotification,
                  }
                )}
                onClick={() => setIsNotification(!IsNotification)}
              >
                <Bell
                  size={21}
                  color="black"
                  className=" translate-y-[4px] mb-2 "
                />
              </div>
              {IsNotification && (
                <div  className="absolute z-50 mt-2">
                  <DropNotification />
                </div>
              )}
            </div>
          </div>
          <div className="     rounded-lg  hover:gradient-border  h-8 flex items-center mt-3">
            <div className="flex   font-lato text-sm font-normal text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-fuchsia-600">
              <Rocket color="blue" size={16} className="mt-1 ml-1" />
              <span className="ml-2 ">Upgrade this workspace</span>
            </div>
          </div>
          <div className="border rounded-md flex items-center px-1 my-3">
            <Search size={18} />
            <input
              type="text"
              className="ml-1 placeholder-gray-400 text-sm w-full h-8 font-lato rounded-md px-1"
              placeholder="Search & commands"
            />
          </div>
          <ul className="mt-4">
            {Sidebart.map((item, i) => (
              <li
                key={i}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  " items-center p-2 h-[32px] rounded-md  flex gap-x-2 mb-[2px]",
                  {
                    " bg-gray-100": value === item.id,
                    "hover:bg-zinc-100": value !== item.id,
                  }
                )}
              >
                {item.logo}
                {item.name}
              </li>
            ))}
            <li className=" mt-3">
              <button
                className="flex items-center  w-full  hover:bg-gray-200 focus:outline-none gap-x-1 p-2 rounded-md"
                onClick={toggleMenu}
              >
                <ChevronDown
                  className={`h-5 w-5 transition duration-300 ${
                    isOpen ? "" : "rotate-counterclockwise-90"
                  }`}
                />
                <UsersRound size={17} />
                <span>Team</span>
              </button>
              {isOpen && (
                <ul
                  className={`ml-4 pl-8 mt-1 space-y-2 ${
                    isOpen ? "dropdown-animation" : ""
                  }`}
                  style={{ maxHeight: isOpen ? "100px" : "0" }}
                >
                  <li className=" text-gray-400 flex">
                    <Link className="flex gap-x-1" href="/page1">
                      <FolderPlus size={19} />
                      <div className=" text-gray-400">Create folder</div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className=" mt-3">
              <button
                className="flex items-center  w-full  hover:bg-gray-100 focus:outline-none gap-x-1 p-2 rounded-md"
                onClick={toggleClose}
              >
                <ChevronDown
                  className={`h-5 w-5 transition duration-300 ${
                    isClose ? "" : "rotate-counterclockwise-90"
                  }`}
                />
                <CircleUserRound size={19} />
                <span>Personal</span>
              </button>
              {isClose && (
                <ul
                  className={`ml-4 pl-8 mt-1 space-y-2 ${
                    isClose ? "dropdown-animation" : ""
                  }`}
                  style={{ maxHeight: isClose ? "100px" : "0" }}
                >
                  <li className=" text-gray-400 flex">
                    <Link className="flex gap-x-1" href="/page1">
                      <FolderPlus size={19} />
                      <div className=" text-gray-400">Create folder</div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </section>
        {/* second section */}
        <section>
          <div className=" m-3 flex flex-col border rounded-md p-3 relative shadow-md">
            <div className=" flex text-sm gap-2 font-semibold text-black  mb-[6px]">
              <GanttChartSquare size={20} />
              Team library
            </div>
            <p className=" text-sm  text-[#3F4250] font-normal">
              {" "}
              Create branded templates <br />
              Upload custom fonts,images <br />
              And video
            </p>
            <button className="w-[64px] bg-[#6B53FF] px-[12px] mt-3 py-[6px] rounded-lg text-white  text-sm">
              Set up
            </button>
            <div className=" absolute -z-10 right-0 bottom-0">
              <Image
                src={pitch}
                width={128}
                height={80}
                sizes="100vw"
                alt="bg-image"
              />
            </div>
          </div>
          <div className=" w-full h-[1px] bg-gray-200"></div>
          <div>
            <ul className=" text-sm flex flex-col p-3">
              <li className=" flex gap-x-2  hover:bg-gray-100 pl-2 py-[8px] rounded-md">
                <UserRoundPlus size={17} />
                <span className="">Invite members</span>
              </li>
              <li className=" flex gap-x-2  hover:bg-gray-100 pl-2 py-[8px] rounded-md">
                <Trash size={17} />
                <span>Recently deleted</span>
              </li>
              <li className=" flex gap-x-2  hover:bg-gray-100 pl-2 py-[8px] rounded-md">
                <Download size={17} />
                <span>Install app</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
