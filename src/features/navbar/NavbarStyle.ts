import { motion } from "framer-motion";
import styled from "styled-components";

//CSS
export const Container = styled(motion.div)`
  position: relative;
  padding: 1.5rem 14rem 1.5rem 14rem;
  background-color: var(--color-slate-50);
  border-bottom: 1px solid var(--color-slate-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100000;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
  }
`;
export const NavList = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Button = styled(motion.button)`
  color: var(--color-slate-50);
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.sign {
    color: var(--color-slate-600);
  }
  &.heading {
    padding: 2rem 3rem;
    font-size: 1.7rem;
  }
`;

// LiNav

export const Li = styled(motion.li)`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

// InfoList
export const InfoList = styled.div`
  background-color: var(--color-slate-50);
  position: absolute;
  top: 7.9rem; // Height of navbar
  left: 0;
  padding: 2rem 14rem 1rem 14rem;
  width: 100%;
  box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.08),
    0 4px 6px -2px rgba(16, 24, 40, 0.03);
`;
