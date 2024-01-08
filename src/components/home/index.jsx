import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfilPicture from "../../assets/oceane.jpeg";
import SunBurst from "../../assets/Sunburst4.png";
import "./infiniteScolling.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./rotatingSvg.css";

// import colors from '../../utils/style/colors';

const HeightPage = styled.div`
  height: 100vh;
  padding-top: 4rem;
`;
const TitleWebsite = styled.h1`
  font-size: 70px;
  padding: 0px 120px;
  font-weight: lighter;
  position: absolute;
  z-index: 3;
`;
const SubTitleWebsiteWeb = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 20rem;
  right: 320px;
  z-index: 3;
`;
const SubTitleWebsiteDeveloper = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 24rem;
  right: 10rem;
  z-index: 3;
`;
const SubTitleWebsiteDesigner = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 28rem;
  right: 110px;
  z-index: 3;
`;
const AnimatedPicture = styled(motion.img)`
  border-radius: 100%;
  object-fit: cover;
  height: 420px;
  width: 420px;
`;

const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`;
const ScrollTextContainer = styled.div`
  padding-top: 5rem;
`;

const OpenToWorkContainer = styled.h1`
  word-spacing: 1rem;
`;

const SocialsLinkContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 120px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 25px;
  font-family: "Ade Display", serif;
`;

const Home = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5, // Ajustez la valeur du seuil selon vos besoins
  });

  useEffect(() => {
    if (inView) {
      // Si l'élément est dans la vue, déclenchez l'animation
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <HeightPage id="homePage">
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <TitleWebsite>
            HELLO,
            <br />
            I'M OCEANE
          </TitleWebsite>
        </motion.div>
      </div>
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <SubTitleWebsiteWeb>WEB</SubTitleWebsiteWeb>
          <SubTitleWebsiteDeveloper>DEVELOPER</SubTitleWebsiteDeveloper>
          <SubTitleWebsiteDesigner>DESIGNER</SubTitleWebsiteDesigner>
        </motion.div>
      </div>
      <SocialsLinkContainer>
        <SocialLink href="www.linkedin.com/in/océane-villeneuve">
          LINKEDIN
        </SocialLink>
        <br />
        <SocialLink href="https://github.com/OceaneVilleneuve">
          GITHUB
        </SocialLink>
      </SocialsLinkContainer>
      <PictureContainer ref={ref}>
        <AnimatedPicture
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{ zIndex: -1 }}
          src={ProfilPicture}
          alt="Oceane"
        />
        <img className="pong-image" src={SunBurst} alt="sunburst" />
      </PictureContainer>
      <ScrollTextContainer>
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <OpenToWorkContainer>
                OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN
                TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO
                WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK
                • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •
                OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN
                TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO
                WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK
                • OPEN TO WORK • OPEN TO WORK •
              </OpenToWorkContainer>
            </div>
          </div>
        </div>
      </ScrollTextContainer>
    </HeightPage>
  );
};

export default Home;
