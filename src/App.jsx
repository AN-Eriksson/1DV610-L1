import { useState } from 'react'
import { InputForm } from './components/InputForm'
import { NameDisplay } from './components/NameDisplay'

function App() {
  const [name, setName] = useState("default")

  return (
    <div>
      <InputForm name={name} setName={setName}/>
      <NameDisplay name={name} />
    </div>
  )
}

export default App
