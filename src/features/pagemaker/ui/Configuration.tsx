import styled from "styled-components";
import ToggleButton from "./ToggleButtton";
import {
  usePageDispatchContext,
  usePageStateContext,
} from "../../../context/usePageContext";
import { useState } from "react";

export type Item = {
  name: string;
  definition: string;
  type:
    | "navigation"
    | "header"
    | "cartOrList"
    | "sidebar"
    | "dark"
    | "reactOrEmoji";
};

type Props = {
  item: Item;
};

const ConfigContainer = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;
const Info = styled.div``;
const Title = styled.h3`
  font-size: 1.8rem;
`;
const Description = styled.p`
  color: #312f2f;
  font-size: 1.4rem;
`;

function Configuration({ item }: Props) {
  const { name, definition, type } = item;
  const {
    isCardOrList,
    isDark,
    isHeader,
    isNavigation,
    isReactOrEmoji,
    isSidebar,
  } = usePageStateContext();
  const initialState =
    type === "cartOrList"
      ? isCardOrList
      : type === "dark"
      ? isDark
      : type === "header"
      ? isHeader
      : type === "navigation"
      ? isNavigation
      : type === "sidebar"
      ? isSidebar
      : type === "reactOrEmoji"
      ? isReactOrEmoji
      : null;
  const [isOn, setIsOn] = useState(initialState);

  const dispatch = usePageDispatchContext();

  function handleClick() {
    const updatedIsOn = !isOn;
    setIsOn(updatedIsOn);
    dispatch({ type: type, payload: updatedIsOn });
  }

  return (
    <ConfigContainer onClick={handleClick}>
      {isOn !== null && <ToggleButton isOn={isOn} />}
      <Info>
        <Title>{name}</Title>
        <Description>{definition}</Description>
      </Info>
    </ConfigContainer>
  );
}
export default Configuration;
