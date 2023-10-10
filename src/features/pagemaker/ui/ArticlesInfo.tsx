import { motion } from "framer-motion";
import styled from "styled-components";
import ArticlesTitle from "./ArticlesTitle";
import InfoIcons from "./InfoIcons";

const InfoContainer = styled(motion.div)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ArticlesInfo() {
  return (
    <InfoContainer>
      <ArticlesTitle />
      <InfoIcons />
    </InfoContainer>
  );
}
export default ArticlesInfo;
