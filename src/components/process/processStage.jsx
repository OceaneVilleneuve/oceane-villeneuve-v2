import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import arrowImage from "../../assets/image-80b19b4b-21f3-4e0f-8ffe-069bf976b0f2 (1).png";
import "../home/infiniteScolling.css";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;

  transition: color 0.3s ease;

`;

const SubTitleNumber = styled.p`
  font-size: 10px;
  margin-right: -15px;
  padding-top: 22px;
`;

const SubTitleProcess = styled.h2`
  font-family: "Ade Display", serif;
  font-weight: lighter;
  font-size: 55px;
  margin-bottom: 0;
`;

const ArrowImage = styled(motion.img)`
  width: 42px;
  height: 42px;
  margin-left: 10px;
  margin-top: 38px;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Title = ({ index, title, text, left }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer key={index} style={{
      marginLeft: left
    }}>
      <SubTitleContainer
        $index={index}
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: isOpen ? "black" : "#3E3D3D",
        }}
      >
        <div style={{ display: "flex" }}>
          <SubTitleNumber>0{index + 1}.</SubTitleNumber>
          <SubTitleProcess>{title}</SubTitleProcess>
        </div>
        <ArrowImage
          src={arrowImage}
          alt="Arrow"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </SubTitleContainer>
      {isOpen && (
        <TextContainer index={index}>
          <p>{text}</p>
        </TextContainer>
      )}
    </SectionContainer>
  );
};

export default Title;
