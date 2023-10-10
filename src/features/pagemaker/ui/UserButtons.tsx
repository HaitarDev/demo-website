import { AiOutlineHome } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";
import { PiNotification } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { SlPeople } from "react-icons/sl";

import { Icon, Li, P, Ul } from "./ListStyling";
import { usePageStateContext } from "../../../context/usePageContext";

function UserButtons() {
  const { isSidebar } = usePageStateContext();
  return (
    <Ul
      animate={isSidebar ? { opacity: 1 } : { opacity: 0 }}
      transition={isSidebar ? { delay: 0.7 } : { delay: 0.1 }}
    >
      <Li>
        <Icon>
          <AiOutlineHome />
        </Icon>
        <P>Explore</P>
      </Li>
      <Li>
        <Icon>
          <MdRssFeed />
        </Icon>
        <P>Feed</P>
      </Li>
      <Li>
        <Icon>
          <PiNotification />
        </Icon>
        <P>Notifications</P>
      </Li>
      <Li>
        <Icon>
          <SlPeople />
        </Icon>
        <P>Membres</P>
      </Li>
      <Li>
        <Icon>
          <CgProfile />
        </Icon>
        <P>Profile</P>
      </Li>
    </Ul>
  );
}
export default UserButtons;
