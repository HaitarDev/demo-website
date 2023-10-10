import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { navList } from "../../sections/Navbar";

type Props = {
  name: string;
  isOpen: boolean;
  showDropdown: () => void;
};

// CSS
const List = styled(motion.div)``;

function Dropdown({ name, isOpen, showDropdown }: Props) {
  // IF OPEN DISPLAY DROP DOWN IF NOT DONT !!
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(`.nav-${name}`) && isOpen) return;
      if (!target?.closest(`.class-${name}`)) showDropdown();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [showDropdown, name, isOpen]);

  return (
    <div
      className={`class-${name}`}
      style={isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      <AnimatePresence>
        <List
          key={`key ${Math.random() * 9999}`}
          animate={{ opacity: 1, display: "block" }}
          initial={{ opacity: 0, display: "none" }}
          exit={{ opacity: 0, display: "none" }}
        >
          {navList.map((list) => {
            if (
              isOpen &&
              list.name.toLowerCase() === name.toLowerCase() &&
              list.tsx
            ) {
              return React.cloneElement(list.tsx, {
                isClicked: isOpen,
                key: `component-${list.name}`,
              });
            }

            return null;
          })}
        </List>
      </AnimatePresence>
    </div>
  );
}
export default Dropdown;
