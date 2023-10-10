import styled from "styled-components";

// CSS
const Types = styled.div`
  display: flex;
  align-items: center;
  gap: 1.14rem;
  margin-bottom: 2.5rem;
  color: var(--color-gray-800);
  cursor: default;
`;
const Type = styled.div`
  font-weight: 500;

  &.active {
    background-color: var(--color-indigo-200);
    padding: 0.5rem 0.6rem;
    border-radius: 0.5rem;
  }
`;

function ArticlesType() {
  return (
    <Types>
      <Type className="active">All</Type>
      <Type>Design</Type>
      <Type>Engineering</Type>
      <Type>Product thinking</Type>
    </Types>
  );
}
export default ArticlesType;
