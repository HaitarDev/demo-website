import styled from "styled-components";
import IconHeader from "./IconHeader";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
`;
const Img = styled(motion.img)`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

function ImageContainer() {
  return (
    <Container>
      <Img
        src="https://assets.website-files.com/632a253b6e9c1587d2b8853d/63974038357caa2332055448_Image%2520(7)-p-1080.webp"
        alt="img"
      />
      <IconHeader position={true} />
    </Container>
  );
}
export default ImageContainer;
