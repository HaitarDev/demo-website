import React, { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { Li } from "./NavbarStyle";

import Dropdown from "./Dropdown";

type Props = {
  name: string;
  tsx?: ReactNode;
};

function LiNav({ name }: Props) {
  const [isClicked, setIsClicked] = React.useState(false);

  const showDropdown = () => setIsClicked(false);

  const variants = {
    initial: {
      color: "var(--color-slate-800)",
    },
    hover: { color: "var(--color-slate-500)" },
  };

  return (
    <div className={`nav-${name}`}>
      <AnimatePresence>
        <Li
          variants={variants}
          initial="initial"
          whileHover="hover"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          {name}
          {name.toLowerCase() !== "pricing" &&
            !isClicked && ( // Because pricing didnt have dropdown
              <motion.span
                style={{ marginTop: "0.7rem" }}
                initial={{ opacity: 0, rotate: 178 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 178 }}
                transition={{ duration: 0.3, type: "just" }}
              >
                <AiOutlineDown />
              </motion.span>
            )}

          {name.toLowerCase() !== "pricing" && isClicked && (
            <motion.span
              style={{ marginTop: "0rem" }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 178, marginTop: "-0.8rem" }}
              exit={{ opacity: 0, rotate: 0, marginTop: "0rem" }}
              transition={{ duration: 0.3, type: "just" }}
            >
              <AiOutlineDown />{" "}
            </motion.span>
          )}
        </Li>
        <Dropdown
          key={name}
          name={name}
          isOpen={isClicked}
          showDropdown={showDropdown}
        />
      </AnimatePresence>
    </div>
  );
}

export default LiNav;
