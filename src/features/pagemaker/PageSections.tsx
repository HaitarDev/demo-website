import styled from "styled-components";
import EditPage from "./EditPage";
import Page from "./Page";

function PageSections() {
  const Container = styled.div`
    padding-left: 15rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
      padding-left: 0.2rem;
      display: block;
    }
  `;

  return (
    <Container>
      <EditPage />
      <Page />
    </Container>
  );
}
export default PageSections;
