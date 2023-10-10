import { MdOutlineNotifications, MdOutlineMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

function MoreInfo() {
  const Container = styled.div`
    display: flex;
    gap: 1.8rem;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <Container>
      <Button black>
        <Icon>
          <MdOutlineNotifications />
        </Icon>
        Subscribe
      </Button>
      <Button>
        <MdOutlineMoreHoriz />
      </Button>
    </Container>
  );
}
export default MoreInfo;
