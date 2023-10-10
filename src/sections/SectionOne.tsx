import styled from "styled-components";
import HeadingTypewriter from "../features/typewriter/HeadingTypewriter";
import Tab from "../features/tab/Tab";
import PageSections from "../features/pagemaker/PageSections";

import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { Button } from "../features/navbar/NavbarStyle";

const Container = styled.div`
  background: var(--color-slate-100);
`;
const Part = styled.div`
  padding: 3rem 8rem 0rem 8rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    padding-top: 4rem;
  }
`;
const Heading = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 6.5rem;
  line-height: 8rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;
const Better = styled.span`
  color: var(--color-blue-500);
`;
const Description = styled.h3`
  color: var(--color-slate-500);
  font-weight: 600;
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;
const TypewriterContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 7rem;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;
const Page = styled.div`
  padding-bottom: 8rem;
`;

function SectionOne() {
  return (
    <Container>
      <Part>
        <Heading>
          <Title>
            make <Better>better </Better> relationships
            <br /> with your customers
          </Title>
          <Description>
            Streamline your customer experience with an all-in-one community
            engagement <br /> platform. Say goodbye to the hassle of multiple
            tools.
          </Description>
          <Button
            className="heading"
            initial={{ backgroundColor: "var(--color-blue-500)" }}
            whileHover={{ backgroundColor: "var(--color-blue-600)" }}
            transition={{ duration: 0.3 }}
          >
            Get started
          </Button>
        </Heading>
      </Part>

      <Part>
        <Tab />
      </Part>

      <TypewriterContainer>
        <HeadingTypewriter />
        <Icons>
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <SiTypescript />
        </Icons>
      </TypewriterContainer>

      <Page>
        <PageSections />
      </Page>
    </Container>
  );
}
export default SectionOne;
