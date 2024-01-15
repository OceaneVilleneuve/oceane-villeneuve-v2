import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SubTitleContainer = styled.div`
  align-items: center;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Title = ({ index, entreprise, text }) => {
  return (
    <Container key={index}>
      <SubTitleContainer>
        <h1>{entreprise}</h1>
      </SubTitleContainer>
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
};

export default Title;
