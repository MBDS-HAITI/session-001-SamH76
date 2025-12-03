import data from '../../assets/data.json'
import { Etudiants } from './Etudiants';
import { Notes } from './Notes';
import { Matieres } from './Matieres';
import { APropos } from './APropos';
import { Header} from '../Session1';

function MainContent2({index}){

const evaluation = data[index];
return (
  <ul>
    <li> 
     Etudiant : {evaluation.student.firstname} {evaluation.student.lastname}
    </li>
    <li>
      Cours : {evaluation.course}
    </li>
    <li>
      Date évaluation : {evaluation.date}
    </li>
    <li>
      Grade : {evaluation.grade}
    </li>

  </ul>
)

}

function MainContent( {module, setModule}){
switch (module){
case "Etudiants" : 
return (<Etudiants/>)

case "Matieres" :
    return (<Matieres/>)

case "Notes" : 
    return (<Notes/>)

case "APropos":
    return (<APropos/>)
case "Accueil":
    return (
        <div></div>
    )
    default : return (<p>Page introuvable</p>)
}

}


export {MainContent2, MainContent}