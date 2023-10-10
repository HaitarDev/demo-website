import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { usePageStateContext } from "../../../context/usePageContext";

//CSS
const Logo = styled(motion.div)`
  display: flex;
  gap: 1rem;
  letter-spacing: 0.1rem;
`;
const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const Img = styled.img`
  width: 3rem;

  @media (max-width: 768px) {
    width: 1.5rem;
  }
`;

function PageLogo() {
  const { isNavigation } = usePageStateContext();

  return (
    <AnimatePresence>
      {!isNavigation ? (
        <Logo
          key="logo1"
          initial={{ y: 20, opacity: 0, visibility: "hidden" }}
          animate={{
            y: 0,
            opacity: 1,
            visibility: "visible",
            transition: { delay: 0.2 },
          }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <Img
            src="https://assets.website-files.com/632a253b6e9c1587d2b8853d/63974038357caa182e05542e_Logomark.svg"
            alt="Logo-Page"
          />
          <Title>CustomPage</Title>
        </Logo>
      ) : (
        <Logo
          key="logo2"
          initial={{ y: 20, opacity: 0, visibility: "hidden" }}
          animate={{ y: 0, opacity: 1, visibility: "visible" }}
          exit={{ y: 20, opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <Img
            src="https://assets.website-files.com/632a253b6e9c1587d2b8853d/638e87f530d50756cc2f91bc_Logomark.svg"
            alt="Logo-Page"
          />
          <H2>CustomPage</H2>
        </Logo>
      )}
    </AnimatePresence>
  );
}
export default PageLogo;
