import styled from "styled-components";
import IconHeader from "./IconHeader";
import ArticlesTitle from "./ArticlesTitle";

function Header() {
  const Container = styled.div`
    display: flex;
    gap: 2rem;
  `;

  return (
    <Container>
      <IconHeader position={false} />
      <ArticlesTitle />
    </Container>
  );
}
export default Header;
