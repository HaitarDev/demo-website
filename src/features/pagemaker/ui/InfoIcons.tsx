import styled from "styled-components";
import Button from "./Button";
import { CgMore } from "react-icons/cg";
import { LuBellRing } from "react-icons/lu";
import Icon from "./Icon";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  gap: 1.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

function InfoIcons() {
  return (
    <Container>
      <Button black={true}>Add discussion</Button>
      <Button>
        <Icon>
          <LuBellRing />
        </Icon>
      </Button>
      <Button>
        <Icon>
          <CgMore />
        </Icon>
      </Button>
    </Container>
  );
}
export default InfoIcons;
