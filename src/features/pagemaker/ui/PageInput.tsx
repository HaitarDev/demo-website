import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { usePageStateContext } from "../../../context/usePageContext";
import { AnimatePresence, motion } from "framer-motion";

//CSS
const Input = styled(motion.div)`
  height: 100%;
  min-width: 30%;
  border: 0.1rem soLid #d0d5dd;
  border-radius: 0.2rem;
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.6rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const P = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
const Ul = styled(motion.ul)`
  display: flex;
  gap: 3rem;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Li = styled.li`
  padding: 0.6rem 1rem;
  color: #fff;
  transition: 0.2s linear all;

  &:hover {
    background-color: #11111156;
    border-radius: 0.6rem;
  }
`;

function PageInput() {
  const { isNavigation } = usePageStateContext();

  return (
    <AnimatePresence>
      {isNavigation ? (
        <Input
          key="input"
          initial={{ y: 20, opacity: 0, visibility: "hidden" }}
          animate={{ y: 0, opacity: 1, visibility: "visible" }}
          exit={{ y: 20, opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <BsSearch />
          <P>Search for topics and discussions</P>
        </Input>
      ) : (
        <Ul
          key="list"
          initial={{ y: 20, opacity: 0, visibility: "hidden" }}
          animate={{ y: 0, opacity: 1, visibility: "visible" }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Li>Home</Li>
          <Li>Articles</Li>
          <Li>Discussion</Li>
          <Li>WishList</Li>
        </Ul>
      )}
    </AnimatePresence>
  );
}
export default PageInput;
