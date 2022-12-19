import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Cavalo Festeiro</h1>
      <div>
        <input type='text' className='nome'></input>
        <button className='botao'>Convidar</button>
      </div>
      <div className='convidados'></div>

    </div>  
  )
}

export default App
