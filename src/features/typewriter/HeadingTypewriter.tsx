import { Cursor, useTypewriter } from "react-simple-typewriter";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  color: var(--color-slate-800);
  letter-spacing: 0.2rem;

  @media (max-width: 968px) {
    font-size: 2rem;
    letter-spacing: normal;
  }
`;
const TypedText = styled.span``;

function HeadingTypewriter() {
  const [text] = useTypewriter({
    words: [
      "hard Work and dedication.",
      "resilience and perseverance.",
      "continuous learning and growth.",
    ],
    loop: true,
  });
  return (
    <H2>
      Behind every succeful person there is <br /> <TypedText>{text}</TypedText>
      <span>
        <Cursor cursorColor="gray" />
      </span>
    </H2>
  );
}
export default HeadingTypewriter;
