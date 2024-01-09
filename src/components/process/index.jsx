// import React from "react";
// import { useMediaQuery } from "react-responsive";
// import styled from "styled-components";
// import "../home/infiniteScolling.css";
// // import styled from 'styled-components';
// // import colors from '../../utils/style/colors';

// const HeightPage = styled.div`
//   height: 100vh;
//   padding-top: 10rem;
// `;
// const SubTitleProcess = styled.h2`
//   font-family: "Ade Display", serif;
//   font-weight: lighter;
//   padding-left: 20px;
// `;

// const SubTitleNumber = styled.p`
//   font-size: 10px;
//   padding-top: 19px;
// `;
// const SubTitleContainer = styled.div`
//   display: flex;
//   padding-left: 54px;
//   margin-top: -1em;
// `;

// const OpenToWorkContainer = styled.h1`
//   word-spacing: 1rem;
//   font-weight: lighter;
// `;

// const ContainerProcess = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Process = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   // const location = useLocation();

//   return (
//     <HeightPage id="processPage">
//       <h1
//         style={{
//           fontSize: "50px",
//           padding: "0px 0px 50px 80px",
//         }}
//       >
//         MY PROCESSUS
//       </h1>
//       <ContainerProcess>
//         <div>
//           <SubTitleContainer>
//             <SubTitleNumber>01.</SubTitleNumber>
//             <SubTitleProcess>BRIEF</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>02.</SubTitleNumber>
//             <SubTitleProcess>DESIGN</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>03.</SubTitleNumber>
//             <SubTitleProcess>DEVELOPPEMENT</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>04.</SubTitleNumber>
//             <SubTitleProcess>PRODUCTION</SubTitleProcess>
//           </SubTitleContainer>
//         </div>
//         <p
//           style={{
//             fontSize: isMobile ? "" : "15px",
//             width: "35%",
//             textAlign: "center",
//             paddingRight: "160px",
//           }}
//         >
//           On sait depuis longtemps que travailler avec du texte lisible et
//           contenant du sens est source de distractions, et empêche de se
//           concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
//           sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
//           possède une distribution de lettres plus ou moins normale, et en tout
//           cas comparable avec celle du français standard.
//         </p>
//       </ContainerProcess>
//       {/* useScroll with spring smoothing pour la barre des textes */}
//       <div style={{ paddingTop: isMobile ? "3rem" : "10rem" }}>
//         <div className="m-scroll">
//           <div className="m-scroll__title">
//             <div>
//               <OpenToWorkContainer>
//                 WEB DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT •
//               </OpenToWorkContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeightPage>
//   );
// };

// export default Process;
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from "styled-components";

const HeightPage = styled.div`
  height: 100vh;
  padding-top: 10rem;
`;

const SubTitleProcess = styled.h2`
  font-family: "Ade Display", serif;
  font-weight: lighter;
  padding-left: 20px;
`;

const SubTitleNumber = styled.p`
  font-size: 10px;
  padding-top: 19px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  padding-left: 54px;
  margin-top: -1em;
`;

const ContainerProcess = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Process = () => {
  const [activeSection, setActiveSection] = useState(0);
  const paragraphControls = useAnimation();

  const sectionsData = [
    {
      title: 'BRIEF',
      text:
        'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard.',
    },
    {
      title: 'DESIGN',
      text:
        'Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.',
    },
    {
      title: 'DEVELOPPEMENT',
      text:
        'Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh.',
    },
    {
      title: 'PRODUCTION',
      text:
        'Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.',
    },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight;

    const newActiveSection = Math.floor(scrollY / sectionHeight);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
      paragraphControls.start({ opacity: 0, x: -20 });

      setTimeout(() => {
        paragraphControls.start({ opacity: 1, x: 0 });
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, paragraphControls]);

  return (
    <HeightPage id="processPage">
      <h1>MY PROCESSUS</h1>
      <ContainerProcess>
        <div>
          {[...Array(sectionsData.length).keys()].map((index) => (
            <SubTitleContainer key={index}>
              <SubTitleNumber>{index + 1}.</SubTitleNumber>
              <SubTitleProcess
                style={{
                  color: activeSection === index ? 'black' : `rgba(0, 0, 0, ${0.1 * Math.abs(index - activeSection)})`,
                }}
              >
                {sectionsData[index].title}
              </SubTitleProcess>
            </SubTitleContainer>
          ))}

          <motion.p
            animate={paragraphControls}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '15px',
              width: '35%',
              textAlign: 'center',
              paddingRight: '160px',
            }}
          >
            {sectionsData[activeSection]?.text}
          </motion.p>
        </div>
      </ContainerProcess>
    </HeightPage>
  );
};

export default Process;
