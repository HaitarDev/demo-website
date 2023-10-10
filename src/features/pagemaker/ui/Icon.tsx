import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

//CSS
const IconContainer = styled.div`
  font-size: 1.8rem;
  height: 90%;
`;
function Icon({ children }: Props) {
  return <IconContainer>{children}</IconContainer>;
}
export default Icon;
