import ImgAccueil from "../../asset/home-illustration.svg"
import styled from 'styled-components';
import { colors } from "../../utils/style/colors";
import { StyledLink } from "../../componants/Header";

const HomeDiv = styled.div`
  width: 100%;
  height : 75vh;
  display:flex;
  justify-content: center;
  margin-top:64px;
`;
const MainContents = styled.div`
  width: 85%;
  background-color:${colors.backgroundLight};
  padding : 5%;
  border-radius : 16px;
  display:flex;
`;
const TitleContents = styled.div`
  flex : 0 1 50%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.h1`
  font-size:50px;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
`;
const ImgContents = styled.div`
  flex : 0 1 50%;
  display:flex;
  justify-content: center;
`;  

const Img = styled.img`
  width:75%
`;

function Home () {

  return (
    <HomeDiv>
      <MainContents>
        <TitleContents>
          <Title>Repérez vos besoins,<br /> on s’occupe du reste, avec les meilleurs talents</Title>
          <StyledLink to='/survey/1' $isFullLink> Faire le test </StyledLink>
        </TitleContents>
        <ImgContents>
          <Img src={ImgAccueil} alt="Image d'accueil" />
        </ImgContents>
      </MainContents>
    </HomeDiv>
  )
}

export default Home