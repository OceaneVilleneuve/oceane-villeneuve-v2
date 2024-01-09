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
// import ButterflyLeft from "../../assets/1042729_252ef.gif"

const HeightPage = styled.div`
  height: 100vh;
`;
const TitleWebsite = styled.h1`
  font-weight: lighter;
  position: absolute;
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

// const ButterflyPngLeft = styled.img`
//   position: absolute;
//   top: 10rem;
//   right: 11rem;
//   height: 40px;
//   width: 40px;
//   object-fit: cover;
// `;

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
      style={{ paddingTop: isMobile ? "1rem" : "5rem" }}
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
              fontSize: isMobile ? "17px" : "70px",
              padding: isMobile ? "0px 33px" : "0px 80px",
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
              fontSize: isMobile ? "17px" : "70px",
              padding: isMobile ? "3rem 4.9rem" : "11rem 19rem",
            }}
          >
            WEB
          </SubTitleWebsiteWeb>
          <SubTitleWebsiteDeveloper
            style={{
              fontSize: isMobile ? "17px" : "70px",
              padding: isMobile ? "4rem 2rem" : "15rem 9rem",
            }}
          >
            DEVELOPPEUR
          </SubTitleWebsiteDeveloper>
          <SubTitleWebsiteDesigner
            style={{
              fontSize: isMobile ? "17px" : "70px",
              padding: isMobile ? "5rem 1.9rem" : "19rem 6rem",
            }}
          >
            DESIGNER
          </SubTitleWebsiteDesigner>
        </motion.div>
      </div>
      <motion.div
        key={animationKey}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          style={{
            position: "absolute",
            padding: isMobile ? "4rem 0px 0px 33px" : " 18rem 0px 0px 85px",
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
        style={{ paddingTop: isMobile ? null : "2rem" }}
      >
        <AnimatedPicture
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{
            zIndex: -3,
            height: isMobile ? "150px" : "420px",
            width: isMobile ? "150px" : "420px",
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
          x: window.innerWidth,
          y: window.innerHeight,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: hasHovered ? -500 : 0,
          y: hasHovered ? -500 : 0,
        }}
        style={{
          top: isMobile ? "8.6rem" : "22.5rem",
          right: isMobile ? "4rem" : "18rem",
          height: isMobile ? "35px" : "50px",
          width: isMobile ? "35px" : "50px",
        }}
        whileHover={{ x: -50, y: -50, rotate: 45 }}
        transition={{ ease: "linear", duration: 3 }}
        onMouseEnter={handleButterflyHover}
      />
      {/* <ButterflyPngLeft src={ButterflyLeft} alt="pretty butterfly" /> */}
      <div style={{ paddingTop: isMobile ? "3rem" : "14rem" }}>
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
