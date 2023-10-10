import { Icon, Li, P, Ul } from "./ListStyling";

import { TbJewishStar, TbHelpCircle, TbMapStar } from "react-icons/tb";
import { MdEmojiEvents, MdOutlineGroups3 } from "react-icons/md";
import { GrArticle, GrResources } from "react-icons/gr";
import { RiDiscussLine } from "react-icons/ri";
import { FaQuora } from "react-icons/fa6";
import { usePageStateContext } from "../../../context/usePageContext";

function SidebarButtons() {
  const { isSidebar } = usePageStateContext();

  return (
    <Ul
      animate={isSidebar ? { opacity: 1 } : { opacity: 0 }}
      transition={isSidebar ? { delay: 0.7 } : { delay: 0.1 }}
    >
      <Li>
        <Icon>
          <RiDiscussLine />
        </Icon>
        <P>Discussions </P>
      </Li>

      <Li>
        <Icon>
          <GrArticle />
        </Icon>
        <P>Articles</P>
      </Li>
      <Li>
        <Icon>
          <MdEmojiEvents />
        </Icon>
        <P>Events</P>
      </Li>

      <Li>
        <Icon>
          <MdOutlineGroups3 />
        </Icon>
        <P>Groups</P>
      </Li>

      <Li>
        <Icon>
          <TbJewishStar />
        </Icon>
        <P>Wishlist</P>
      </Li>

      <Li>
        <Icon>
          <TbHelpCircle />
        </Icon>
        <P>Help Center</P>
      </Li>
      <Li>
        <Icon>
          <GrResources />
        </Icon>
        <P>Resources</P>
      </Li>
      <Li>
        <Icon>
          <TbMapStar />
        </Icon>
        <P>Road map</P>
      </Li>
      <Li>
        <Icon>
          <FaQuora />
        </Icon>
        <P>FAQ</P>
      </Li>
    </Ul>
  );
}

export default SidebarButtons;
