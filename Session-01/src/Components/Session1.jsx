function Title(){
  return (
<h1>Introduction à React</h1>
  )
}

function Subtitle(){
  return(
    <>
      <h3>A la découverte des premières notions de React</h3>
      <hr/>
    </>
  )
}

function Logo(){
  return(
      <img src='/mbds_logo_transparent.svg' alt="Le logo MBDS que je n'ai pas.">
      </img>
  )
}

function Header(){
  return (
    <div className="header-container">
      <Logo/>
      <Title/>
      <Subtitle/>
    </div>
    
  )
}


function ShowDateAndHours(){
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
    <div className="footer">
      {date.getFullYear()} - <b>Henry Samantha</b>, tous droits réservés.
    </div>
  )
}


export {Header, ShowDateAndHours as MainContent1, Logo, Footer}