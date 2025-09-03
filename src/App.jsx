import { useState } from 'react'
import './App.css'
import { InputForm } from './components/InputForm'
import { NameDisplay } from './components/NameDisplay'

function App() {
  const [name, setName] = useState("default")

  return (
    <>
      <InputForm name={name} setName={setName}/>
      <NameDisplay name={name} />
    </>
  )
}

export default App
