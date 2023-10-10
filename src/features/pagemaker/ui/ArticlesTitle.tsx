import styled from "styled-components";

const Titles = styled.div``;
const Title = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: var(--color-gray-900);
`;
const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
`;

function ArticlesTitle() {
  return (
    <Titles>
      <Title>Articles</Title>
      <SubTitle>Advice and answers from the Team</SubTitle>
    </Titles>
  );
}
export default ArticlesTitle;
