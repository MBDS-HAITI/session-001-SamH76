import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function MainContent(){
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
