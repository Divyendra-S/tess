"use client";
import { Type, BarChart3 } from "lucide-react";
import { HomeIcon } from "@heroicons/react/16/solid";
import { FiTable } from "react-icons/fi";
import { LuSquareCode } from "react-icons/lu";
import { BsRecordCircle } from "react-icons/bs";
import { LuShapes } from "react-icons/lu";
import { PiSticker } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { GrMultimedia } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import Dropmedia from "./dropmedia";
import { cn } from "@/lib/utils";
import { useState,useRef,
  useEffect,
  RefObject, } from "react";
import Navdrop from "./navdrop";
import ChartModal from "./chartmodal";
import DropNotification from "./dropnotification";
import ShareModal from "./sharemodal";
import TextDropdown from "./text-dropdown";

import Link from "next/link";


type Handler = (event: MouseEvent) => void;

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
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

const Topbar = () => {
  const [clicked, setClicked] = useState(0);
  const [modalClicked, setModalClicked] = useState(false);
  const [notification, setNotification] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [nav, setNav] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setNav(false));

  const clickedRef = useRef<HTMLDivElement>(null);
  useOutsideClick(clickedRef, () => setClicked(0));

  const notificationRef = useRef<HTMLDivElement>(null);
  useOutsideClick(notificationRef, () => setNotification(false));
  
  

  


  const menudropdown = [
    { id: 1, dropdown: <TextDropdown /> },
    {
      id: 2,
      dropdown: <Dropmedia />,
    },
  ];
  const menu = [
    {
      id: 1,
      name: "Text",
      logo: <Type size={23} className="  " />,
    },
    {
      id: 2,
      name: "Media",
      logo: <GrMultimedia className=" h-6 w-6" />,
    },
    {
      id: 3,
      name: "Shape",
      logo: <LuShapes className=" h-6 w-6" />,
    },
    {
      id: 4,
      name: "Sticker",
      logo: <PiSticker className=" h-6 w-6" />,
    },
    {
      id: 5,
      name: "Embed",
      logo: <LuSquareCode className=" h-6 w-6" />,
    },
    {
      id: 6,
      name: "Table",
      logo: <FiTable className=" h-6 w-6" />,
    },
    {
      id: 7,
      name: "Record",
      logo: <BsRecordCircle className=" h-6 w-6" />,
    },
  ];
  return (
    <div className=" px-4 py-3 flex font-lato justify-between h-[56px] relative">
      {modalClicked && (
        <div className="absolute z-50">
          <ChartModal setModalClicked={setModalClicked} />{" "}
        </div>
      )}

      <div className="flex">
        <Link href={'/pitch'}><AiOutlineHome className="w-6 h-6 mr-2 mt-[4px] translate-y-[-1px]" /></Link>
        
        <div ref={navRef} >
          <div 
            className={cn(
              " mt-[1px] mr-2 p-2 flex justify-center items-center mb-2  rounded-md hover:bg-gray-100 translate-y-[-3px] ",
              { " bg-[#f3f1f1] ": nav }
            )}
            onClick={() => setNav(!nav)}
          >
            <AiOutlineMenu className={cn(" h-5 w-5  ")}  />
          </div>
          {nav && (
            <div  className=" absolute ">
              <Navdrop />
            </div>
          )}
        </div>

        <div className=" flex flex-col pl-2 mr-2">
          <span className=" text-sm truncate">Set up your Workspace </span>
          <span className=" text-xs truncate text-[#6F7387] ">Private</span>
        </div>
      </div>
      <div ref={clickedRef} className="flex -mt-2">
        {menu.map((item, i) => (
          <div  className=" relative" key={i}>
            <div
              key={i}
              className={cn(
                "flex flex-col  hover:bg-[#f3f1f1] px-2 py-1 items-center rounded-lg mr-[2px] mb-1 cursor-default",
                {
                  "bg-[#f3f1f1]": clicked === item.id,
                }
              )}
              onClick={() => {
                setClicked((prevClicked) => {
                  if (prevClicked === item.id) {
                    return 0;
                  } else {
                    return item.id;
                  }
                });
              }}
            >
              <span className="">{item.logo}</span>
              <span className=" text-xs font-normal text-tiny">
                {item.name}
              </span>
            </div>
            {clicked == item.id && (
              <div  className=" absolute">
                {menudropdown.map((drop, j) => (
                  <div 
                    key={j}
                    className={cn("hidden", {
                      " block ": clicked == drop.id,
                      "hidden" :clicked !== drop.id
                    })}
                  >
                    {" "}
                    {drop.dropdown}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="flex  items-center">
          <span ref={notificationRef} className="relative hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center">
            <IoNotificationsOutline
              className=" h-6 w-6"
              onClick={() => setNotification(!notification)}
            />
            {notification && (
              <div  className=" absolute   top-[40px] ">
                <DropNotification />{" "}
              </div>
            )}
          </span>
          <span className=" flex-col hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center mr-1 ml-[2px]">
            <BarChart3
              size={20}
              className=""
              onClick={() => setModalClicked(true)}
            />
          </span>
          <button className="mr-2 py-[6px] px-3  border rounded-lg flex gap-x-1 items-center text-sm">
            <span>
              <FaPlay />
            </span>
            <span>Present</span>
          </button>
          <div className="flex flex-col relative">
            <button
              className=" py-[6px] px-3  border rounded-lg flex gap-x-1 items-center text-sm bg-[#6B53FF] text-white"
              onClick={() => setShareModal(true)}
            >
              Share
            </button>
            {shareModal && (
              <div className=" absolute z-50">
                <ShareModal setIsOpen={setShareModal} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
