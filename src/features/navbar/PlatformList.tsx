import { AiOutlineCheckCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { InfoList } from "./NavbarStyle";
import { PiShootingStarLight } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

// CSS
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Box = styled(motion.div)`
  padding: 2rem 3rem;
  display: flex;
  /* align-items: center; */
  gap: 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
`;
const Icon = styled.div`
  font-size: 2.5rem;

  &.button {
    font-size: 1.6rem;
  }
`;
const Titles = styled.div``;
const Title = styled.h4`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;
const Description = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0rem;
  color: var(--color-slate-800);
  width: 30rem;
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 0.7rem;
`;
const Image = styled.div`
  width: 20rem;
`;
const Button = styled(motion.div)`
  margin-top: 1.4rem;
  display: flex;

  /* align-items: center; */
  gap: 0.5rem;
  font-size: 1.4rem;
  color: var(--color-blue-700);
`;

function PlatformList() {
  const platformList = [
    {
      icon: <AiOutlineCheckCircle />,
      title: "Overview",
      desc: "Welcome to bettermode! here are the basics",
    },
    {
      icon: <PiShootingStarLight />,
      title: "Features",
      desc: "Discover templates, customizations, analytics, and more",
    },
    {
      icon: <GoStack />,
      title: "Apps & integrations",
      desc: "Connect your favorite tools with Bettermode",
    },
  ];
  const platformVideoList = [
    {
      title: "Community templates",
      img: "https://assets.website-files.com/632a253b6e9c1587d2b8853d/63974038357caa0b1105543d_Image%2520(5)-p-500.webp",
      desc: "experience the convenient or pre-built configurable templates",
      icon: <AiOutlinePlayCircle />,
      button: "Watch video",
    },
    {
      title: "What's new ? ",
      img: "https://assets.website-files.com/632a253b6e9c1587d2b8853d/63974038357caaa5a005544e_Image%2520(8)-p-500.webp",
      desc: "take a look at what we have been building to help businesses engage customers.",
      icon: <BsArrowRight />,
      button: "Product updates",
    },
  ];

  return (
    <InfoList className="list">
      <Container>
        <Boxes>
          {platformList.map((list, i) => (
            <Box
              key={i}
              initial={{ backgroundColor: "var(--color-slate-50)" }}
              whileHover={{ backgroundColor: "var(--color-slate-100)" }}
            >
              <Icon>{list.icon}</Icon>
              <Titles>
                <Title>{list.title}</Title>
                <Description>{list.desc}</Description>
              </Titles>
            </Box>
          ))}
        </Boxes>

        <Boxes className="background">
          {platformVideoList.map((list, i) => (
            <Box
              key={i}
              initial={{ backgroundColor: "var(--color-slate-50)" }}
              whileHover={{ backgroundColor: "var(--color-slate-100)" }}
            >
              <Image>
                <Img src={list.img} alt="video" />
              </Image>
              <Titles>
                <Title>{list.title}</Title>
                <Description>{list.desc}</Description>
                <Button whileHover={{ color: "var(--color-blue-800)" }}>
                  <Icon className="button">{list.icon}</Icon>
                  {list.button}
                </Button>
              </Titles>
            </Box>
          ))}
        </Boxes>
      </Container>
    </InfoList>
  );
}
export default PlatformList;
