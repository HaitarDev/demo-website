import styled from "styled-components";
import ArticlesHeader from "./ArticlesHeader";
import ArticlesOverview from "./ArticlesOverview";
import { usePageStateContext } from "../../../context/usePageContext";
import ArticlesImageHeader from "./ArticlesImageHeader";
import { AnimatePresence, motion } from "framer-motion";

// CSS
const ArticlesContainer = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function Articles() {
  const { isHeader } = usePageStateContext();
  return (
    <ArticlesContainer>
      <AnimatePresence>
        {!isHeader ? (
          <motion.div
            key="header"
            initial={{ x: "100vh", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ArticlesHeader />
          </motion.div>
        ) : (
          <motion.div
            key="imageHeader"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "just", duration: 0.3 }}
            // exit={{ opacity: 0 }}
          >
            <ArticlesImageHeader />
          </motion.div>
        )}
      </AnimatePresence>
      <ArticlesOverview />
    </ArticlesContainer>
  );
}
export default Articles;
