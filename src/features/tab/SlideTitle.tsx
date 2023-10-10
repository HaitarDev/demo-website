import styled from "styled-components";
import { useProgressContext } from "../../context/useProgressContext";

// Props
type SliderProps = {
  width: number;
};
type Props = {
  title: string;

  index: number;
};

// styles
const TitleBtn = styled.div`
  font-weight: 500;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: var(--color-slate-200);
  color: var(--color-slate-700);
  border-radius: 0.4rem;
  text-align: center;
  cursor: pointer;
  z-index: 10000;

  @media (max-width: 768px) {
    padding: 0.5rem 0.7rem;
  }
`;
const Title = styled.h3`
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SliderContainer = styled.div`
  height: 0.35rem;
  border-radius: 0.2rem;
`;
const Slider = styled.div<SliderProps>`
  width: ${(props) => props.width}%;
  background-color: #630e9f;
  height: 100%;
`;

function SlideTitle({ title, index }: Props) {
  const { currentTitle, progress, setCurrentTitle, setProgress } =
    useProgressContext();
  // handle Events
  function handleClickProgress() {
    if (currentTitle === index) return;
    setProgress(0);
    setCurrentTitle(index);
  }

  // return tsx
  return (
    <TitleBtn onClick={handleClickProgress}>
      <Title> {title}</Title>
      <SliderContainer>
        {currentTitle === index && <Slider width={progress}></Slider>}
      </SliderContainer>
    </TitleBtn>
  );
}
export default SlideTitle;
