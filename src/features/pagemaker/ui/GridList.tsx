import styled from "styled-components";
import { BsFire } from "react-icons/bs";
import { CgComment } from "react-icons/cg";

type Props = {
  img?: string;
  title: string;
  comment: number;
  like: number;
};

// CSS
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.8rem;
  border-bottom: 0.1rem solid var(--color-gray-300);

  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
  }
`;
const Div = styled.div`
  display: flex;
  gap: 3rem;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--color-gray-200);
  background-color: var(--color-gray-50);
  padding: 0.2rem 1.5rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;
const Icon = styled.div`
  color: ${(props) => props.color};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  color: var(--color-gray-900);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Comment = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 300;
  font-size: 1.6rem;
  color: var(--color-gray-500);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

function GridList({ title, comment, like }: Props) {
  return (
    <Container>
      <Div>
        <Like>
          <Icon color=" #d97706">
            <BsFire />
          </Icon>
          {like}
        </Like>
        <Title>{title}</Title>
      </Div>
      <Comment>
        <Icon>
          <CgComment />
        </Icon>
        {comment}
      </Comment>
    </Container>
  );
}
export default GridList;
