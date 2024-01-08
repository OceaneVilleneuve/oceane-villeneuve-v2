import React, { useState, useEffect } from "react";
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
  padding-top: 4rem;
`;
const TitleWebsite = styled.h1`
  font-size: 70px;
  padding: 0px 120px;
  font-weight: lighter;
  position: absolute;
  z-index: -2;
`;
const SubTitleWebsiteWeb = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 20rem;
  right: 320px;
  z-index: -2;
`;
const SubTitleWebsiteDeveloper = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 24rem;
  right: 10rem;
  z-index: -2;
`;
const SubTitleWebsiteDesigner = styled.h1`
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 28rem;
  right: 110px;
  z-index: -2;
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
  padding-top: 6rem;
`;

const OpenToWorkContainer = styled.h1`
  word-spacing: 1rem;
  font-weight: lighter;
`;

const SocialsLinkContainer = styled.div`
  position: absolute;
  top: 29rem;
  left: 120px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 25px;
  font-family: "Ade Display", serif;
`;

const ButterflyPngRight = styled(motion.img)`
  position: absolute;
  top: 21.3rem;
  right: 19rem;
  height: 50px;
  width: 50px;
  object-fit: cover;
  z-index: 2;
`;

// const ButterflyPngLeft = styled.img`
//   position: absolute;
//   top: 13rem;
//   right: 15rem;
//   height: 45px;
//   width: 45px;
//   object-fit: cover;
// `;

const Home = () => {
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
        <SocialLink
          href="www.linkedin.com/in/océane-villeneuve"
          target="_blank"
        >
          LINKEDIN
        </SocialLink>
        <br />
        <SocialLink href="https://github.com/OceaneVilleneuve" target="_blank">
          GITHUB
        </SocialLink>
      </SocialsLinkContainer>
      <PictureContainer ref={ref}>
        <AnimatedPicture
          key={animationKey}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{ zIndex: -3 }}
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
        whileHover={{ x: -50, y: -50, rotate: 45 }}
        transition={{ ease: "linear", duration: 3 }}
        onMouseEnter={handleButterflyHover}
      />
      {/* <ButterflyPngLeft src={ButterflyLeft} alt="pretty butterfly" /> */}
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
