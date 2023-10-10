import styled from "styled-components";
import GridCard from "./GridCard";
import { AnimatePresence, motion } from "framer-motion";
import { usePageStateContext } from "../../../context/usePageContext";
import { gridInfo } from "../../../utils/data";

// CSS
const GridContainer = styled(motion.div)`
  display: grid;
  gap: 1rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

function ArticlesGrid() {
  const { isSidebar } = usePageStateContext();

  return (
    <AnimatePresence>
      <GridContainer
        initial={{ gridTemplateColumns: "24rem 24rem 24rem 24rem" }}
        animate={
          !isSidebar
            ? {
                gridTemplateColumns: "27.5rem 27.5rem 27.5rem 27.5rem",
                overflowY: "hidden",
              }
            : {
                gridTemplateColumns: "24rem 24rem 24rem 24rem",
              }
        }
        layout
        transition={
          isSidebar ? { duration: 0.3 } : { delay: 0.4, duration: 0.4 }
        }
      >
        {gridInfo.map((info, i) => (
          <GridCard
            key={i}
            img={info.img}
            title={info.title}
            like={info.likes}
            fire={info.comments}
          />
        ))}
      </GridContainer>
    </AnimatePresence>
  );
}
export default ArticlesGrid;
