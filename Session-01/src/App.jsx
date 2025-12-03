import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, MainContent1, Footer} from './Components/Session1'
import { MainContent2, MainContent} from './Components/Session2/MainContent2'
import data from './assets/data.json'

import { Menu } from './Components/Session2/Menu'
import { Etudiants} from './Components/Session2/Etudiants'
import { Notes } from './Components/Session2/Notes'
import { APropos } from './Components/Session2/APropos'
import { Matieres } from './Components/Session2/Matieres'

function App() {
  const [count, setCount] = useState(0)
  
  const index = Math.floor(Math.random()* data.length);
  const [module, setModule] = useState("Accueil"); 
  return (
    <>
    <main>
       <Menu exclusive={module ==="Accueil"} onSelect ={setModule}/>
      
      <MainContent module={module} setModule={setModule}/> 
    </main>
    
    <Footer/>
    </>
  )
}

export default App
