
function Header(){
  return (
    <div>
      <img src='/mbds_logo_transparent.svg' alt="Le logo MBDS que je n'ai pas."></img>
      <h1>Introduction à React</h1>
      <h3>A la découverte des premières notions de React</h3>
      <hr/>
    </div>
    
  )
}

function MainContent1(){
  const date = new Date();
  return(
 <div>
  <p>Bonjour, on est le {date.getDate()}/{date.getMonth() +1 }/{date.getFullYear()} et il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} </p>
 </div>
  )
}


function Footer(){
  
  const date = new Date();
  return (
    <footer>
      {date.getFullYear()} - <b>Henry Samantha</b>, tous droits réservés.
    </footer>
  )
}


export {Header, MainContent1, Footer}