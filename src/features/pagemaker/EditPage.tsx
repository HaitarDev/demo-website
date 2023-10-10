import styled from "styled-components";
import Configuration from "./ui/Configuration";
import { config } from "./ConfigData";

// Style
const Container = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  color: #6969f4;
  font-size: 4.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Span = styled.span`
  color: black;
`;
const Description = styled.p`
  color: #4c4848;

  margin-bottom: 2rem;
`;
const Configurations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;

  @media (max-width: 768px) {
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

function EditPage() {
  return (
    <Container>
      <Title>
        Better <br />
        <Span>configuration</Span>
      </Title>
      <Description>
        Visually customize and change every part of your community in real time.
      </Description>
      <Configurations>
        {config.map((item, i) => (
          <Configuration item={item} key={i} />
        ))}
      </Configurations>
    </Container>
  );
}
export default EditPage;
