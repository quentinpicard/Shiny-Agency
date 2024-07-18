import {freelanceProfiles} from '../../data/freelanceProfiles/freelanceProfiles';
import Card from "../../componants/Card";
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;


function Freelances () {
    return (
        <div>
            <h1>Freelance</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.jobTitle}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}


export default Freelances;