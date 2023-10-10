import styled from "styled-components";
import Header from "./Header";
import MoreInfo from "./MoreInfo";

function ArticlesHeader() {
  const HeaderContainer = styled.div`
    padding: 1.4rem 1.5rem;
    border-radius: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -10px 2px 1px 1px #0000002e;
    border: 1px solid var(--color-gray-200);

    @media (max-width: 768px) {
      padding: 0.4rem 0.5rem;
    }
  `;
  return (
    <HeaderContainer>
      <Header />
      <MoreInfo />
    </HeaderContainer>
  );
}
export default ArticlesHeader;
