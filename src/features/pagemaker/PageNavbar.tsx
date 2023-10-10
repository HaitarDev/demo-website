import styled from "styled-components";
import { PADDING_LEFT_PAGE } from "../../utils/constants";
import PageLogo from "./ui/PageLogo";
import PageInput from "./ui/PageInput";
import PageUser from "./ui/PageUser";
import { motion } from "framer-motion";
import { usePageStateContext } from "../../context/usePageContext";

// CSS
const Nav = styled(motion.div)`
  padding: 1.3rem 1rem 1.3rem ${PADDING_LEFT_PAGE}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  box-shadow: 0 4px 8px -2px rgba(16, 24, 40, 0.1),
    0 2px 4px -2px rgba(16, 24, 40, 0.06);
  overflow: hidden;
`;

function PageNavbar() {
  const { isNavigation } = usePageStateContext();

  return (
    <Nav
      initial={{ opacity: 0, x: -100 }}
      animate={
        !isNavigation
          ? { opacity: 1, background: "#2563eb", x: 0 }
          : { opacity: 1, background: "white", x: 0 }
      }
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <PageLogo />
      <PageInput />
      <PageUser />
    </Nav>
  );
}
export default PageNavbar;
