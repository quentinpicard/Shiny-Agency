import {freelanceProfiles} from '../../data/freelanceProfiles/freelanceProfiles';
import Card from "../../componants/Card";
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: flex;
    width:100%;
    margin-top : 3%;
    height : 65vh;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
`;

const MainContent = styled.div`
    width: 65%;
    margin : 64px auto;
`;

const TitleContent = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items:center
`;

const Title = styled.h2`
    font-size : 30px;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
`;



function Profils () {
    return (
        <MainContent>
            <TitleContent>
                <Title>Trouvez votre prestataire</Title>
                <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
            </TitleContent>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        name={profile.name}
                    />
                ))}
            </CardsContainer>
        </MainContent>
    )
}


export default Profils;