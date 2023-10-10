import LiNav from "../features/navbar/LiNav";
import { useEffect, useState } from "react";
import {
  Button,
  Buttons,
  Container,
  List,
  NavList,
} from "../features/navbar/NavbarStyle";
import PlatformList from "../features/navbar/PlatformList";
import SolutionsList from "../features/navbar/SolutionsList";
import EntrepriseList from "../features/navbar/EntrepriseList";
import ResourcesList from "../features/navbar/ResourcesList";

const navList = [
  { name: "Platform", tsx: <PlatformList /> },
  { name: "Solution", tsx: <SolutionsList /> },
  { name: "Pricing" },
  { name: "Entreprise", tsx: <EntrepriseList /> },
  { name: "Resources", tsx: <ResourcesList /> },
];

function Navbar() {
  const [prevScroll, setPrevScroll] = useState(0);
  const [isShowNav, setIsShowNav] = useState(true);

  // NAVBAR: hide when scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (prevScroll > currentScroll) setIsShowNav(true);
      if (prevScroll < currentScroll) setIsShowNav(false);

      setPrevScroll(currentScroll);
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <Container
      initial={{ y: 0 }}
      animate={isShowNav ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <NavList>
        <img src="/Bettermode-logo.svg" alt="logo" />
        <List>
          {navList.map((list) => (
            <LiNav key={list.name} name={list.name} tsx={list.tsx} />
          ))}
        </List>
      </NavList>
      <Buttons>
        <Button
          initial={{ backgroundColor: "var(--color-blue-500)" }}
          whileHover={{ backgroundColor: "var(--color-blue-600)" }}
          transition={{ duration: 0.3 }}
        >
          Get started
        </Button>
        <Button
          className="sign"
          initial={{
            backgroundColor: "var(--color-slate-100)",
          }}
          whileHover={{ backgroundColor: "var(--color-slate-200)" }}
          transition={{ duration: 0.3 }}
        >
          Sign in
        </Button>
      </Buttons>
    </Container>
  );
}
export default Navbar;
export { navList };
