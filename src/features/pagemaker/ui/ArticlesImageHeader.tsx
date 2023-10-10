import styled from "styled-components";
import ImageContainer from "./ImageContainer";
import ArticlesInfo from "./ArticlesInfo";

// CSS
const HeaderContainer = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  background-color: var(--color-gray-50);
  filter: drop-shadow(0px 8px 20px rgba(16, 24, 40, 0.1));
`;

function ArticlesImageHeader() {
  return (
    <HeaderContainer>
      <ImageContainer />
      <ArticlesInfo />
    </HeaderContainer>
  );
}
export default ArticlesImageHeader;
