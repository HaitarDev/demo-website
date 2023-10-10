import styled from "styled-components";
import Articles from "./ui/Articles";
import Sidebar from "./ui/Sidebar";
import { PADDING_LEFT_PAGE } from "../../utils/constants";
import { motion } from "framer-motion";

// CSS
const BodyContainer = styled(motion.div)`
  padding: 2rem 1rem 3rem ${PADDING_LEFT_PAGE}rem;
  display: flex;
  gap: 2rem;
  background-color: var(--color-gray-50);
  height: 60rem;
  height: max-content;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.2rem 0.2rem 0.3rem 0.4rem;
    display: flex;
    gap: 1.5rem;
  }
`;

function PageBody() {
  return (
    <BodyContainer>
      <Sidebar />
      <Articles />
    </BodyContainer>
  );
}
export default PageBody;
