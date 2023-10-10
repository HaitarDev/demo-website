import styled from "styled-components";
// Type

type Props = {
  isOn?: boolean | null;
};

// Style
const ToggleSwitch = styled.div<Props>`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  transition: background-color 0.3s;

  background-color: ${(props) => (props.isOn ? " #6969f4" : "#ccc")};
`;

// Styled component for the toggle circle
const ToggleCircle = styled.div<Props>`
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: translateX(${(props) => (props.isOn ? "30px" : "2px")});
`;

const ToggleButton = ({ isOn }: Props) => {
  return (
    <ToggleSwitch isOn={isOn}>
      <ToggleCircle isOn={isOn} />
    </ToggleSwitch>
  );
};

export default ToggleButton;
