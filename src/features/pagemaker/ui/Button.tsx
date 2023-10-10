import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  black?: boolean;
};
// CSS
const ButtonContainer = styled.div`
  box-shadow: -1px 2px 4px black;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--color-gray-50);
  color: var(--color-gray-800);
  border: 1px solid var(--color-gray-400);

  &.background {
    background-color: var(--color-gray-800);
    color: var(--color-gray-50);
    box-shadow: -1px 2px 4px white;
  }
`;

function Button({ children, black }: Props) {
  return (
    <ButtonContainer className={black ? "background" : ""}>
      {children}
    </ButtonContainer>
  );
}
export default Button;
