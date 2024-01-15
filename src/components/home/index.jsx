import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ProfilPicture from "../../assets/oceane.jpeg";
import SunBurst from "../../assets/Sunburst4.png";
import "./infiniteScolling.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./rotatingSvg.css";
import ButterflyRight from "../../assets/4467b2537f5e5ada1e527a8573de8a7e.gif";

const HeightPage = styled.div`
  min-height: 100vh;
  padding-top: 2rem;
`;
const TitleWebsite = styled.h1`
  font-weight: lighter;
  position: absolute; /* Modifier cette ligne */
  z-index: -2;
`;
const SubTitleWebsiteWeb = styled.h1`
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDeveloper = styled.h1`
  font-weight: lighter;
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const SubTitleWebsiteDesigner = styled.h1`
  font-weight: lighter;
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
`;
const AnimatedPicture = styled(motion.img)`
  border-radius: 100%;
  object-fit: cover;
`;

const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const OpenToWorkContainer = styled.h1`
  word-spacing: 1rem;
  font-weight: lighter;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #000;
  font-family: "Ade Display", serif;
`;

const ButterflyPngRight = styled(motion.img)`
  position: absolute;
  object-fit: cover;
  z-index: 2;
`;

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
      // Réinitialise hasHovered à false lorsque l'ancre est revisitée
      setHasHovered(false);
    }
  }, [inView]);

  const handleButterflyHover = () => {
    setHasHovered(true);
  };

  return (
    <HeightPage
      id="homePage"
      style={{
        paddingTop: isMobile ? "1rem" : "5rem",
        minHeight: isMobile ? "75vh" : "100vh",
      }}
    >
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <TitleWebsite
            style={{
              fontSize: isMobile ? "30px" : "70px",
              padding: isMobile ? "30px 33px" : "0px 80px",
            }}
          >
            BONJOUR,
            <br />
            C'EST OCEANE
          </TitleWebsite>
        </motion.div>
      </div>
      <div ref={ref}>
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{ position: "relative" }}
        >
          <SubTitleWebsiteWeb
            style={{
              fontSize: isMobile ? "30px" : "70px",
              padding: isMobile ? "24rem 4.9rem" : "11rem 19rem",
            }}
          >
            WEB
          </SubTitleWebsiteWeb>
          <SubTitleWebsiteDeveloper
            style={{
              fontSize: isMobile ? "30px" : "70px",
              padding: isMobile ? "26rem 2rem" : "15rem 9rem",
            }}
          >
            DEVELOPPEUR
          </SubTitleWebsiteDeveloper>
          <SubTitleWebsiteDesigner
            style={{
              fontSize: isMobile ? "30px" : "70px",
              padding: isMobile ? "28rem 1.9rem" : "19rem 6rem",
            }}
          >
            DESIGNER
          </SubTitleWebsiteDesigner>
        </motion.div>
      </div>
      <motion.div
        key={animationKey}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            padding: isMobile ? "32rem 0px 0px 33px" : " 18rem 0px 0px 85px",
          }}
        >
          <SocialLink
            style={{ fontSize: isMobile ? "10px" : "25px" }}
            href="www.linkedin.com/in/océane-villeneuve"
            target="_blank"
          >
            LINKEDIN
          </SocialLink>
          <br />
          <SocialLink
            href="https://github.com/OceaneVilleneuve"
            target="_blank"
            style={{ fontSize: isMobile ? "10px" : "25px" }}
          >
            GITHUB
          </SocialLink>
        </div>
      </motion.div>
      <PictureContainer
        ref={ref}
        style={{ paddingTop: isMobile ? "9rem" : "2rem" }}
      >
        <AnimatedPicture
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{
            zIndex: -3,
            height: isMobile ? "230px" : "420px",
            width: isMobile ? "230px" : "420px",
          }}
          src={ProfilPicture}
          alt="Oceane"
        />
        <img className="pong-image" src={SunBurst} alt="sunburst" />
      </PictureContainer>
      <ButterflyPngRight
        src={ButterflyRight}
        alt="butterfly"
        initial={{
          opacity: 0,
          scale: 0.5,
          x: +380,
          y: window.innerHeight,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: hasHovered ? -500 : 0,
          y: hasHovered ? -500 : 0,
        }}
        style={{
          top: isMobile ? "30.3rem" : "22.5rem",
          right: isMobile ? "4rem" : "18rem",
          height: isMobile ? "35px" : "50px",
          width: isMobile ? "35px" : "50px",
        }}
        whileHover={{ x: -50, y: -50, rotate: 45 }}
        transition={{ ease: "linear", duration: 3 }}
        onMouseEnter={handleButterflyHover}
      />
      <div style={{ paddingTop: isMobile ? "18rem" : "7rem" }}>
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <OpenToWorkContainer>
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS •
                OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS
                • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX
                PROJETS • OUVERTE AUX PROJETS • OUVERTE AUX PROJETS • OUVERTE
                AUX PROJETS • OUVERTE AUX PROJETS •
              </OpenToWorkContainer>
            </div>
          </div>
        </div>
      </div>
    </HeightPage>
  );
};

export default Home;
