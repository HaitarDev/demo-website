import styled from "styled-components";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";
import { useProgressContext } from "../../context/useProgressContext";
import { motion } from "framer-motion";

// Props
type Data = { title: string; img: string };
type Titles = Data[];

type Props = {
  titles: Titles;
};

// Style
const StyleWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 3rem;
`;

const TitlesContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
const ImageSlider = styled.div`
  opacity: 1;
  display: block;
  min-width: 75%;
  min-height: 50rem;

  @media (max-width: 768px) {
    min-height: 15rem;
  }
`;

function TabWrapper({ titles }: Props) {
  const { currentTitle } = useProgressContext();

  const renderTitle = titles.map((data: Data, index) => (
    <SlideTitle key={index} title={data.title} index={index} />
  ));

  const renderImage = titles.map((data: Data, index) => {
    if (index === currentTitle)
      return (
        <motion.div
          key={index}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SlideImage title={data.title} image={data.img} />
        </motion.div>
      );
  });

  return (
    <StyleWrapper>
      <TitlesContainer>{renderTitle}</TitlesContainer>
      <ImageSlider>{renderImage}</ImageSlider>
    </StyleWrapper>
  );
}
export default TabWrapper;
