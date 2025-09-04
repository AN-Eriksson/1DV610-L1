import React from 'react'
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
      <h2>Vad heter du?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          className='border'
          placeholder='Namn'
        />
        <button
          type='submit'
          className='border rounded-l'
        >Kör!
        </button>
      </form>
    </div>
  )
}