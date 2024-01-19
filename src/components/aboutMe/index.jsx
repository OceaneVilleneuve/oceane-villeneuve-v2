import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProfilPicture from "../../assets/IMG_0146.JPG";
import PictureFrame from "../../assets/2.PNG";
// import './scrollingText.css';
const AboutMeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
`;

const AboutMeTitle = styled.h1`
  position: absolute;
  top: 100px;
  font-size: 2rem;
  color: #333;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  text {
    font-family: 'Helvetica Neue';
    font-size: 70px;
    font-weight: 600;
  }
`;


const ProfilPictureFrame = styled.img`
  position: absolute;
  width: 32rem;
  height: 42rem;
  top: 52px;
`;

const ProfilPictureAboutMe = styled.img`
  width: 20rem;
  height: 26rem;
  object-fit: cover;
  border-radius: 153px;
`;

const Description = styled.p`
  padding-top: 8rem;
`;


const AboutMe = () => {

  return (
<AboutMeContainer id="aboutMePage">
      <ProfilPictureAboutMe src={ProfilPicture} alt="Oceane" />
      <ProfilPictureFrame src={PictureFrame} alt="Frame" />
      <AboutMeTitle>
    ABOUTE ME ABOUTE ME ABOUTE ME ABOUTE ME
</AboutMeTitle>


      <Description>Je m'appelle Océane. Je suis designer et développeuse web. 1 an d'expérience et des projets.</Description>
    </AboutMeContainer>
  );
};

export default AboutMe;
