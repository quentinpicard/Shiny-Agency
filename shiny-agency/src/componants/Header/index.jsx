// Importation du composant Link depuis react-router-dom pour créer des liens de navigation
import { Link } from "react-router-dom";

// Définition du composant fonctionnel Header
function Header() {
    // Rendu du composant
    return (
        // Élément de navigation contenant les liens
        <nav>
            {/* Lien vers la page d'accueil */}
            <Link to='/'>Accueil</Link>
            {/* Lien vers la première question du questionnaire */}
            <Link to='/survey/1'>Questionnaire</Link>
            {/* Lien vers la page des freelances */}
            <Link to='/freelances'>Freelance</Link>
        </nav>
    );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Header;
