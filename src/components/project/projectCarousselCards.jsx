import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

const InformationProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Picture = styled(motion.img)`
  object-fit: cover;
`;

const Title = styled.div`
  font-family: ${(props) =>
    props.$isAlexa
      ? "'Italianno', cursive"
      : props.$isFerd
      ? "Yahren"
      : "Ade Display"};
`;

const Cards = ({ index, entreprise, text, image }) => {
  const isAlexa = entreprise === "Alexa Studio Création";
  const isFerd = entreprise === "Ferd";
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ref, inView] = useInView({
    threshold: 1,
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

  let pictureWidth, pictureHeight, picturePadding, contentPadding;

  if (isMobile) {
    pictureWidth = isAlexa ? "23rem" : isFerd ? "21rem" : "auto";
    pictureHeight = isAlexa ? "14rem" : isFerd ? "16rem" : "auto";
    // picturePadding = isAlexa ? "13rem 3rem 0rem 2rem" : isFerd ? "13rem 3rem 0rem 2rem" : "auto";
  } else {
    pictureWidth = isAlexa ? "42rem" : isFerd ? "40rem" : "auto";
    pictureHeight = isAlexa ? "26rem" : isFerd ? "31rem" : "auto";
    picturePadding = isAlexa ? "13rem 4rem 0rem 7rem" : isFerd ? "12rem 3rem 0rem 10rem" : "auto";
    contentPadding = isAlexa ? "30rem 2rem 0rem 0rem" : isFerd ? "30rem 3rem 0rem 3rem" : "auto";
  }

  return (
    <Container
      key={uniqueKey}
      style={{
        flexDirection: isMobile ? "column" : null,
        width: isMobile ? "100%" : null,
      }}
    >
      <div ref={ref}>
        <Picture
          $isAlexa={isAlexa}
          $isFerd={isFerd}
          $isMobile={isMobile}
          src={image}
          alt={`Image for ${entreprise}`}
          loaded={imageLoaded.toString()}
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
          style={{
            width: pictureWidth,
            height: pictureHeight,
            padding: picturePadding,
          }}
        />
      </div>
      <div ref={ref}></div>
      <InformationProjectContainer
        style={{
          padding: contentPadding,
          width: isMobile ? "100%" : "100%",
        }}
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
        animate={{
          x: 0, // Move to the center of the screen
          opacity: imageLoaded ? 1 : 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <Title
          $isAlexa={isAlexa}
          $isFerd={isFerd}
          style={{
            fontSize: isMobile ? "35px" : "45px",
          }}
        >
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
