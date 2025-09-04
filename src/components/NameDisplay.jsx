import { useEffect, useState } from 'react'

export const NameDisplay = ({ name }) => {
  const [displayedString, setDisplayedString] = useState("")

  useEffect(() => {
    let currentStringIndex = 0

    const writeTimer = setInterval(() => {
      if (currentStringIndex < name.length) {
        setDisplayedString(name.slice(0, currentStringIndex + 1))
        currentStringIndex++
      } else {
        clearInterval(writeTimer)
      }
    }, 1000)

    return () => clearInterval(writeTimer)
  }, [name])


  return (
    <div className="text-2xl font-bold">
      {displayedString}
    </div>
  )
}