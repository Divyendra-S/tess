"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface ShareModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ShareModal = ({ setIsOpen }: ShareModalProps) => {
  const [activeNow, setActiveNow] = useState(1);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center text-sm  font-lato">
      <div
        ref={modalRef}
        className=" bg-white w-[600px] h-[560px]  rounded-[12px] flex flex-col"
      >
        <div className=" flex justify-between h-[56px] p-4 border-b items-center w-full ">
          <div className="flex gap-x-4  ">
            {" "}
            <span
              className={cn(
                "border-b-2 border-transparent hover:border-b-2 hover:border-[#c2baf5] py-4 cursor-default",
                {
                  "text-[#6B53FF] border-b-2 hover:border-[#6B53FF] border-[#6B53FF]":
                    activeNow == 1,
                }
              )}
              onClick={() => setActiveNow(1)}
            >
              Invite to collaborate
            </span>
            <span
              className={cn(
                "border-b-2 border-transparent hover:border-b-2 hover:border-[#c2baf5] py-4 cursor-default",
                {
                  "text-[#6B53FF] border-b-2 hover:border-[#6B53FF] border-[#6B53FF]":
                    activeNow == 2,
                }
              )}
              onClick={() => setActiveNow(2)}
            >
              Share externally
            </span>
            <span
              className={cn(
                "border-b-2 border-transparent hover:border-b-2 hover:border-[#c2baf5] py-4 cursor-default",
                {
                  "text-[#6B53FF] border-b-2 hover:border-[#6B53FF] border-[#6B53FF]":
                    activeNow == 3,
                }
              )}
              onClick={() => setActiveNow(3)}
            >
              Export
            </span>
          </div>
          <X size={20} className="" onClick={() => setIsOpen(false)} />
        </div>
        <div className=" pt-4 w-full h-[504px] flex flex-col flex-1 ">
          <div className="w-full flex-1 px-4">
            <div className="flex">
              <input
                className=" border rounded-lg p-2 w-[494px]  "
                placeholder="Enter email address..."
              ></input>
              <button className=" bg-[#6B53FF] rounded-lg py-2 px-4 ml-2 text-white">
                Invite
              </button>
            </div>
          </div>
          <div className=" h-[72px] w-full p-4 flex justify-end gap-x-4">
            <span className="flex items-center text-[#6e7284]">
              <Checkbox />
              <span className="ml-1">Link to current slide</span>
            </span>
            <button className=" border rounded-lg p-3 flex items-center px-4 text-[#3F4250] hover:bg-[#f4f2f2] ">
              Copy editor link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
