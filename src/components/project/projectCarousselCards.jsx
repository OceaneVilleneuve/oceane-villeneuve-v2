import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const PictureContainer = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Title = styled.div`
  font-family: ${(props) => {
    if (props.$isAlexa) return "'Italianno', cursive";
    if (props.$isFerd) return "Yahren";
    return "Ade Display";
  }};
  font-size: ${(props) => {
    if (props.$isAlexa) return "45px";
    if (props.$isFerd) return "30px";
    return "Ade Display";
  }};
`;

const Cards = ({ index, entreprise, text, image }) => {
  const isAlexa = entreprise === "Alexa Studio Création";
  const isFerd = entreprise === "Ferd";

  return (
    <Container key={index}>
      <PictureContainer src={image} alt={`Image for ${entreprise}`} />
      <Title $isAlexa={isAlexa} $isFerd={isFerd}>
        {entreprise}
      </Title>
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
};

export default Cards;
