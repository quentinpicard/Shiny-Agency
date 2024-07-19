import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from "../../componants/Card";
import { Loader } from '../../utils/style/Atoms';

const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3%;
    height: 65vh;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
`;

const MainContent = styled.div`
    width: 65%;
    margin: 64px auto;
`;

const TitleContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Loading = styled.div`
    width:100%;
    backgroundcolor : red
`;
const Title = styled.h2`
    font-size: 30px;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
`;

function Profils() {
    const [freelances, setFreelances] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            try {
                const response = await fetch('http://localhost:8000/freelances');
                const data = await response.json();
                console.log('API response:', data.freelancersList); 
                setFreelances(data.freelancersList); // Assurez-vous que 'data' est directement un tableau d'objets
            } catch (err) {
                console.log('===== error =====', err);
                setError(true);
            } finally {
                setDataLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: Une erreur est survenue lors du chargement des données.</div>;
    }

    return (
        <MainContent>
            <TitleContent>
                <Title>Trouvez votre prestataire</Title>
                <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
            </TitleContent>
            {isDataLoading ? (
                <Loading>
                    <Loader />
                </Loading>
                
            ) : (
                <CardsContainer>
                    {
                        freelances.map((profile) => (
                            <Card
                                key={profile.id} // Assurez-vous que chaque 'profile' a une propriété 'id'
                                label={profile.job}
                                name={profile.name}
                                picture={profile.picture} // Ajouter des informations supplémentaires si nécessaire
                            />
                        ))
                    }
                </CardsContainer>
            )}
        </MainContent>
    );
}

export default Profils;
