import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import React from "react";

const Menubars = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>By me</MenubarTrigger>
          <MenubarTrigger>By everyone</MenubarTrigger>
          
          {/* <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent> */}

        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Menubars;
