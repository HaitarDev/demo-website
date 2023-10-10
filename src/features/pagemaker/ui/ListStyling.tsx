import { motion } from "framer-motion";
import styled from "styled-components";

// CSS
const Ul = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: var(--color-gray-700);
`;
const Li = styled.li`
  display: flex;
  gap: 0.7rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  cursor: default;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--color-gray-200);
  }
`;

const P = styled.p`
  font-size: 1.4rem;

  @media (max-width: 968px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled.div`
  font-size: 1.8rem;
`;

export { Ul, Icon, P, Li };
