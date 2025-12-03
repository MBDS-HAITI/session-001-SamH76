import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, MainContent1, Footer } from './Components/Session1'
import { MainContent2 } from './Components/Session2/MainContent2'
import data from './assets/data.json'

import { Menu } from './Components/Session2/Menu'

function App() {
  const [count, setCount] = useState(0)
  
  const index = Math.floor(Math.random()* data.length);
  return (
    <>
    <main>
      <Header/>
      <Menu/>
    </main>
{/*     <Header/>
    <MainContent2 index={index}/> */}
    
    <Footer/>
    </>
  )
}

export default App
