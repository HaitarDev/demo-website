import styled from "styled-components";
import { HiPlus } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { usePageStateContext } from "../../../context/usePageContext";

//CSS
const User = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Add = styled(motion.div)`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  box-shadow: 0 4px 8px -2px rgba(16, 24, 40, 0.1),
    0 2px 4px -2px rgba(16, 24, 40, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  overflow: hidden;
`;
const Img = styled.img`
  max-width: 100%;
`;

const PageUser = () => {
  const { isNavigation } = usePageStateContext();
  return (
    <AnimatePresence>
      <User
        initial={{ opacity: 0, x: -100 }}
        animate={!isNavigation ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Add
          initial={{ opacity: 0 }}
          animate={
            isNavigation
              ? { opacity: 1, background: "#2564eb98" }
              : { opacity: 1, background: "white" }
          }
        >
          <HiPlus />
        </Add>
        <Add>
          <Img src="/Haitar.jpg" alt="user" />
        </Add>
      </User>
    </AnimatePresence>
  );
};
export default PageUser;
