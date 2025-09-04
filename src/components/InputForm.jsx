import { useState } from 'react'

export const InputForm = ({ setName, setNameSubmitted }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setName(inputValue)
    setNameSubmitted(true)
  }

  return (
    <div>
      <h1>Hej! Vad heter du?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          className='border rounded-xs'
          placeholder='Namn'
        />
        <button
          type='submit'
          className='border rounded-sm mx-4 w-10'
        >Kör!
        </button>
      </form>
    </div>
  )
}