// Importation du composant Link depuis react-router-dom pour créer des liens de navigation
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "../../utils/style/colors";

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) => 
        props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

// Définition du composant fonctionnel Header
function Header() {
    // Rendu du composant
    return (
        // Élément de navigation contenant les liens
        <nav>
            {/* Lien vers la page d'accueil */}
            <StyledLink to='/'>Accueil</StyledLink>
            {/* Lien vers la première question du questionnaire */}
            <StyledLink to='/survey/1' $isFullLink >Questionnaire</StyledLink>
            {/* Lien vers la page des freelances */}
            <StyledLink to='/freelances'>Freelance</StyledLink>
        </nav>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Header;
