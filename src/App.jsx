import { useState } from 'react'
import { InputForm } from './components/InputForm'
import { NameDisplay } from './components/NameDisplay'
import { RobberLanguage } from './components/RobberLanguage'

function App() {
  const [name, setName] = useState("")
  const [nameSubmitted, setNameSubmitted] = useState(false)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300'>
      {!nameSubmitted && (
        <InputForm
          name={name}
          setName={setName}
          nameSubmitted={nameSubmitted}
          setNameSubmitted={setNameSubmitted} />
      )}

      {nameSubmitted && (
        <>
          <NameDisplay name={name} />
          <RobberLanguage name={name} />
        </>
      )}

    </div>
  )
}

export default App
