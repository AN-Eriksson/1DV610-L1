import { useState } from 'react'
import './App.css'
import { InputForm } from './components/InputForm'

function App() {
  const [name, setName] = useState("default")

  return (
    <>
      <InputForm name={name} setName={setName}/>
    </>
  )
}

export default App
