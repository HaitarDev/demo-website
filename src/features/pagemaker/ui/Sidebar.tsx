import styled from "styled-components";
import SidebarButtons from "./SidebarButtons";
import UserButtons from "./UserButtons";
import { usePageStateContext } from "../../../context/usePageContext";
import { motion } from "framer-motion";

// CSS
const SidebarContainer = styled(motion.div)`
  display: flex;
  gap: 14rem;
  align-items: flex-start;
  flex-direction: column;
`;

function Sidebar() {
  const { isSidebar } = usePageStateContext();
  return (
    <SidebarContainer
      animate={{ width: isSidebar ? "20rem" : "0rem" }}
      transition={!isSidebar ? { duration: 0.3 } : {}}
    >
      <UserButtons />
      <SidebarButtons />
    </SidebarContainer>
  );
}
export default Sidebar;
