import React from 'react';
import styled from 'styled-components';
import ProfilPicture from "../../assets/IMG_0146.JPG"
// import colors from '../../utils/style/colors';

const AboutMeContainer = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfilPictureAboutMe = styled.img `

width: 27rem;
height: 35rem;
object-fit: cover;
`

const AboutMe = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <AboutMeContainer id="aboutMePage">
      <h1>ABOUT ME</h1>
    <ProfilPictureAboutMe src={ProfilPicture} alt="Oceane" />
    </AboutMeContainer>
  )
};

export default AboutMe;
