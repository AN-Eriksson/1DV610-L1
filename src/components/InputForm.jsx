import React from 'react'

export const InputForm = ({ name, setName }) => {

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h2>Vad heter du?</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  )
}