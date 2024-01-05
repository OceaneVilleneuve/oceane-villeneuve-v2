import React from 'react';
import styled from 'styled-components';
import ProfilPicture from '../../assets/oceane.jpeg';
import './infiniteScolling.css';
// import colors from '../../utils/style/colors';

const HeightPage = styled.div `
  height: 100vh;
  padding-top: 4rem;
`
const TitleWebsite = styled.h1 `
  font-size: 70px;
  padding: 0px 120px;
  font-weight: lighter;
  position: absolute;
`
const SubTitleWebsiteWeb = styled.h1 `
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 20rem;
  right: 320px;
`
const SubTitleWebsiteDeveloper = styled.h1 `
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 24rem;
  right: 10rem;

`
const SubTitleWebsiteDesigner = styled.h1 `
  font-size: 70px;
  font-weight: lighter;
  position: absolute;
  top: 28rem;
  right: 110px;
`
const Picture = styled.img `
  border-radius: 100%;
  object-fit: cover;
  height: 420px;
  width: 420px;
`

const PictureContainer = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`
const ScrollTextContainer = styled.div `
  padding-top: 5rem;
`

const Home = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <HeightPage id="homePage">
      <TitleWebsite>
        HELLO,
        <br/>
        I'M OCEANE
      </TitleWebsite>
      <SubTitleWebsiteWeb>
        WEB
      </SubTitleWebsiteWeb>
      <SubTitleWebsiteDeveloper>
        DEVELOPER
      </SubTitleWebsiteDeveloper>
      <SubTitleWebsiteDesigner>
        DESIGNER
      </SubTitleWebsiteDesigner>
      <PictureContainer>
        <Picture src={ProfilPicture} />
      </PictureContainer>
      <ScrollTextContainer>
        <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            <h1>
              OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •   OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •   OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •   OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •   OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK    •    OPEN TO WORK  •
            </h1>
          </div>
        </div>
        </div>
      </ScrollTextContainer>
    </HeightPage>
  )
};

export default Home;
