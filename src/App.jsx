import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>APRENDIENDO HTML Y CSS: HOJAS DE ESTILO EN CASCADA</h1>
      <div className="card">
        <h3> INTEGRANTES: </h3>

        <h4>Juan Carlos Valencia Caldas</h4>

        <h6>Enlace del proyecto</h6>
        <a href="inicio.html">Haz click aqui para ir al proyecto</a>
        
      </div>
      <p className="read-the-docs">
        UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA
      </p>
    </>
  )
}

export default App
