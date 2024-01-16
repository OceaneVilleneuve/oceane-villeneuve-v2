import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const InformationProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 29rem 7rem 0rem 0rem;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Picture = styled(motion.img)`
  padding: 13rem 3rem 0rem 2rem;
  width: ${(props) => {
    if (props.$isAlexa) return "42rem";
    if (props.$isFerd) return "38rem";
  }};
  height: ${(props) => {
    if (props.$isAlexa) return "26rem";
    if (props.$isFerd) return "30rem";
  }};
  object-fit: cover;
`;

const Title = styled.div`
  font-family: ${(props) =>
    props.$isAlexa
      ? "'Italianno', cursive"
      : props.$isFerd
      ? "Yahren"
      : "Ade Display"};
  font-size: ${(props) =>
    props.$isAlexa ? "45px" : props.$isFerd ? "30px" : "Ade Display"};
`;

const Cards = ({ index, entreprise, text, image }) => {
  const isAlexa = entreprise === "Alexa Studio Création";
  const isFerd = entreprise === "Ferd";
  const [imageLoaded, setImageLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = image;
      img.onload = () => setImageLoaded(true);
    } else {
      setImageLoaded(false);
    }
  }, [inView, image]);

  // Genere une clé unique basé sur l'index du carousel et l'ancre de la page
  const uniqueKey = `${index}_${inView ? "inView" : "notInView"}`;

  return (
    <Container key={uniqueKey}>
      <div ref={ref}>
        <Picture
          $isAlexa={isAlexa}
          $isFerd={isFerd}
          src={image}
          alt={`Image for ${entreprise}`}
          loaded={imageLoaded}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: imageLoaded ? 1 : 0,
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        />
      </div>
      <div ref={ref}></div>
      <InformationProjectContainer
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
        animate={{
          x: 0, // Move to the center of the screen
          opacity: imageLoaded ? 1 : 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <Title $isAlexa={isAlexa} $isFerd={isFerd}>
          {entreprise}
        </Title>
        <TextContainer>
          <p>{text}</p>
        </TextContainer>
      </InformationProjectContainer>
    </Container>
  );
};

export default Cards;
