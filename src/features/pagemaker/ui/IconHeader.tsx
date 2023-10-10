import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  position: boolean;
};

const Icon = styled(motion.div)`
  border-radius: 1.5rem;
  background-color: var(--color-indigo-500);
  padding: 0.8rem 0.5rem;
`;

const Img = styled(motion.img)`
  width: 6rem;
`;

function IconHeader({ position }: Props) {
  return (
    <Icon
      initial={{ position: "inherit" }}
      animate={
        position ? { position: "absolute", bottom: "10%", left: "1%" } : {}
      }
      transition={{ duration: 0.3 }}
    >
      <Img src="/sharing_articles.svg" alt="icon" />
    </Icon>
  );
}
export default IconHeader;
