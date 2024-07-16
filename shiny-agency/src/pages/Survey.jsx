// Importation du hook useParams depuis react-router-dom pour accéder aux paramètres de l'URL
import { useParams } from 'react-router-dom';
// Importation du composant Link depuis react-router-dom pour créer des liens de navigation
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel Survey
function Survey() {
  // Récupération du paramètre questionNumber depuis l'URL
  const { questionNumber } = useParams();
  
  // Conversion du paramètre questionNumber en entier
  const questionNumberInt = parseInt(questionNumber);
  
  // Détermination du numéro de la question précédente
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  
  // Détermination du numéro de la question suivante
  const nextQuestionNumber = questionNumberInt + 1;
  
  // Rendu du composant
  return (
    <div>
      {/* Titre principal du questionnaire */}
      <h1>Questionnaire 🧮</h1>
      
      {/* Affichage du numéro de la question actuelle */}
      <h2>Question {questionNumber}</h2>
      
      {/* Lien vers la question précédente */}
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      
      {/* Condition pour afficher le lien vers les résultats ou la question suivante */}
      {questionNumberInt === 10 ? (
        // Si la question actuelle est la dernière (question 10), lien vers les résultats
        <Link to="/results">Résultats</Link>
      ) : (
        // Sinon, lien vers la question suivante
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Survey;
