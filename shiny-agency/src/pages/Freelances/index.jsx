// Importation de React, des hooks useState et useEffect, ainsi que de styled-components pour le stylage
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from "../../componants/Card"; // Importation du composant Card pour afficher chaque profil
import { Loader } from '../../utils/style/Atoms'; // Importation d'un composant Loader pour afficher un indicateur de chargement

// Création d'un conteneur pour les cartes de profils avec du style
const CardsContainer = styled.div`
    display: flex; // Utilise le modèle Flexbox pour disposer les éléments
    width: 100%; // Prend toute la largeur disponible
    margin-top: 3%; // Marge au-dessus de ce conteneur
    height: 65vh; // Hauteur de 65% de la hauteur de la fenêtre
    flex-wrap: wrap; // Permet de passer à la ligne suivante si nécessaire
    justify-content: space-between; // Espace uniforme entre les éléments
    align-content: space-around; // Aligne les lignes de manière à avoir un espacement uniforme
`;

// Création du conteneur principal du contenu avec du style
const MainContent = styled.div`
    width: 65%; // Largeur de 65% de la largeur de son conteneur parent
    margin: 64px auto; // Marge en haut et en bas de 64px, centré horizontalement
`;

// Création du conteneur pour le titre avec du style
const TitleContent = styled.div`
    width: 100%; // Prend toute la largeur disponible
    display: flex; // Utilise le modèle Flexbox pour disposer les éléments
    flex-direction: column; // Dispose les éléments en colonne
    align-items: center; // Centre les éléments horizontalement
`;

// Création d'un conteneur pour le Loader avec du style
const LoaderWrapper = styled.div`
  display: flex; // Utilise le modèle Flexbox pour disposer les éléments
  justify-content: center; // Centre les éléments horizontalement
`;

// Création du style pour le titre
const Title = styled.h2`
    font-size: 30px; // Taille de la police
    font-family: 'Trebuchet MS', Helvetica, sans-serif; // Famille de polices
`;

// Définition du composant fonctionnel Profils
function Profils() {
    // Déclaration des états pour la liste des freelances, le statut de chargement et les erreurs
    const [freelancersList, setFreelances] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

    // Effet secondaire pour récupérer les données des freelances depuis une API lors du premier rendu du composant
    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true); // Indique que les données sont en cours de chargement
            try {
                // Récupération des données depuis l'API
                const response = await fetch('http://localhost:8000/freelances');
                const {freelancersList} = await response.json(); // Extraction des données
                console.log('API response:', freelancersList); // Affiche les données dans la console pour le débogage
                setFreelances(freelancersList); // Mise à jour de l'état avec les données des freelances
            } catch (err) {
                console.log('===== error =====', err); // Affiche l'erreur dans la console pour le débogage
                setError(true); // Indique qu'une erreur s'est produite
            } finally {
                setDataLoading(false); // Fin du chargement des données, qu'il y ait eu une erreur ou non
            }
        };
        fetchData(); // Appel de la fonction fetchData pour récupérer les données
    }, []); // Le tableau de dépendances est vide, donc cet effet s'exécute uniquement lors du premier rendu

    // Gestion des erreurs
    if (error) {
        return <div>Error: Une erreur est survenue lors du chargement des données.</div>; // Affiche un message d'erreur si une erreur s'est produite
    }

    // Rendu du composant
    return (
        <MainContent>
            <TitleContent>
                <Title>Trouvez votre prestataire</Title> {/* Titre de la section */}
                <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p> {/* Description */}
            </TitleContent>
            {isDataLoading ? (
                // Si les données sont en cours de chargement, afficher le Loader
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
                
            ) : (
                // Sinon, afficher les cartes des freelances
                <CardsContainer>
                    {
                        freelancersList.map((profile) => (
                            <Card
                                key={profile.id} // Identifiant unique pour chaque carte (assurez-vous que chaque 'profile' a une propriété 'id')
                                label={profile.job} // Label de la carte
                                name={profile.name} // Nom du freelance
                                picture={profile.picture} // Photo du freelance
                            />
                        ))
                    }
                </CardsContainer>
            )}
        </MainContent>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Profils;
