import styled from 'styled-components';
import { colors } from "../../utils/style/colors";
import ErrorSVG from "../../asset/404.svg";
import { HomeDiv } from '../../pages/Home';

const MainContents = styled.div`
    width: 85%;
    height : 100%;
    background-color:${colors.backgroundLight};
    padding : 5%;
    border-radius : 16px;
    display:flex;
    flex-direction : column;
    margin : auto auto
`;

const Title = styled.h2`
    width : 100%;
    text-align : center
`;

const Image = styled.img`
    width : 40%;
    margin : auto auto;
`;


function Error() {
    return (
        <HomeDiv>
            <MainContents>
                <Title>Oups...</Title>
                <Image src={ErrorSVG} alt='Image erreur 404'/>
                <Title>Il semblerait qu’il y ait un problème</Title>
            </MainContents>
        </HomeDiv>
       
    )
}
 
export default Error