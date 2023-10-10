import styled from "styled-components";

type Props = {
  title: string;
  image: string;
};

const Image = styled.img`
  width: 100%;
  text-shadow: 2px 2px 15px #000;
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: 968px) {
    width: 400px;
    height: 200px;
  }
`;
function SlideImage({ title, image }: Props) {
  return (
    <Image src={image} alt={title} width={400} height={600} loading="lazy" />
  );
}
export default SlideImage;
