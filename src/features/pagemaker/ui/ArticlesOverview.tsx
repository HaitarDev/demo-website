import styled from "styled-components";
import ArticlesType from "./ArticlesType";
import ArticlesGrid from "./ArticlesGrid";
import { AnimatePresence, motion } from "framer-motion";
import { usePageStateContext } from "../../../context/usePageContext";
import ArticlesList from "./ArticlesList";

// CSS
const Container = styled(motion.div)`
  /* background-color: var(--color-gray-100); */
`;
const Card = styled(motion.div)`
  /* max-width: 100rem; */
`;
const List = styled(motion.div)`
  background-color: var(--color-gray-50);
  border-radius: 0.8rem;
  filter: drop-shadow(0px 8px 20px rgba(16, 24, 40, 0.1));
`;
const ListTitle = styled.h3`
  color: var(--color-gray-800);
  padding: 1.2rem 1.8rem;
  font-size: 1.8rem;
  font-weight: 500;
  border-bottom: 0.1rem solid var(--color-gray-300);
`;

function ArticlesOverview() {
  const { isCardOrList } = usePageStateContext();

  return (
    <Container>
      <AnimatePresence>
        {isCardOrList ? (
          <Card
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
          >
            <ArticlesType />
            <ArticlesGrid />
          </Card>
        ) : (
          <List
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
          >
            <ListTitle>Featured Discussion</ListTitle>
            <ArticlesList />
          </List>
        )}
      </AnimatePresence>
    </Container>
  );
}
export default ArticlesOverview;
