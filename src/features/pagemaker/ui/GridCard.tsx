import styled from "styled-components";

import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { LuSmilePlus } from "react-icons/lu";
import { usePageStateContext } from "../../../context/usePageContext";
import { CgHeart } from "react-icons/cg";
import { MdOutlineChat, MdOutlineMoreHoriz } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { VscBookmark } from "react-icons/vsc";

// Props
type Props = {
  title: string;
  img: string;
  like: number;
  fire: number;
};

// CSS
const Item = styled(motion.div)`
  border-radius: 1rem;
  box-shadow: 1px 1px 4px #00000052;
  overflow: hidden;
  background-color: var(--color-gray-100);

  @media (max-width: 768px) {
    width: 12rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;
const Info = styled.div`
  padding: 0.8rem 0.6rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    height: 8rem;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--color-gray-800);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const ReactionOne = styled(motion.div)`
  display: flex;
  color: var(--color-gray-500);
  gap: 0.8rem;
`;
const ReactionTwo = styled(motion.div)`
  display: flex;
  color: var(--color-gray-500);
  gap: 0.8rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  gap: 0.3rem;
  background-color: var(--color-gray-50);

  @media (max-width: 768px) {
    padding: 0.1rem 0.2rem;
    gap: 0.1rem;
  }
`;
const Span = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Icon = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.color};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Tsx
function GridCard({ title, img, like, fire }: Props) {
  const { isReactOrEmoji } = usePageStateContext();

  return (
    <Item>
      <Img src={img} alt={title} />
      <Info>
        <Title>{title}</Title>

        <AnimatePresence>
          {isReactOrEmoji ? (
            <ReactionOne
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: 40 }}
            >
              <Box>
                <Icon color="#14b8a6">
                  <BiLike />
                </Icon>
                <Span>{like}</Span>
              </Box>
              <Box>
                <Icon color="#ea580c">
                  <BsFire />
                </Icon>
                <Span>{fire}</Span>
              </Box>
              <Box>
                <Icon>
                  <LuSmilePlus />
                </Icon>
              </Box>
            </ReactionOne>
          ) : (
            <ReactionTwo
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: 40 }}
            >
              <Box>
                <Icon>
                  <CgHeart />
                </Icon>
                <Span>{like}</Span>
              </Box>
              <Box>
                <Icon>
                  <MdOutlineChat />
                </Icon>
                <Span>{fire}</Span>
              </Box>
              <Box>
                <Icon>
                  <VscBookmark />
                </Icon>
              </Box>
              <Box>
                <Icon>
                  <MdOutlineMoreHoriz />
                </Icon>
              </Box>
            </ReactionTwo>
          )}
        </AnimatePresence>
      </Info>
    </Item>
  );
}
export default GridCard;
