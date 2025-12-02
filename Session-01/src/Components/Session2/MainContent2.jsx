import data from '../../assets/data.json'

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

export {MainContent2}