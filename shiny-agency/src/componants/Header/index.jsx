// Importation du composant Link depuis react-router-dom pour créer des liens de navigation
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "../../utils/style/colors";
import DarkLogo from "../../asset/dark-logo.png";


const StyledLink = styled(Link)`
    padding: 8px 16px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 16px;
    ${(props) => 
        props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-between;
    align-items:center;
    padding: 16px 24px;
`;

const Images = styled.img`
    width:10%
`;

const Nav = styled.nav`
    width : 28%;
    display: flex;
    flex-direction : row;
    justify-content: space-evenly;
`;

// Définition du composant fonctionnel Header
function Header(logo) {
    // Rendu du composant
    return (
        // Élément de navigation contenant les liens
        <StyledHeader>
            <Link to='/' style={{width:'100%'}}>
                <Images src={DarkLogo} alt="Logo"/>
            </Link>
            
            <Nav>
                {/* Lien vers la page d'accueil */}
                <StyledLink to='/'>Accueil</StyledLink>
                {/* Lien vers la page des freelances */}
                <StyledLink to='/profils'>Profils</StyledLink>
                {/* Lien vers la première question du questionnaire */}
                <StyledLink to='/survey/1' $isFullLink >Questionnaire</StyledLink>
            </Nav>
        </StyledHeader>
        
    );
}


// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Header;
