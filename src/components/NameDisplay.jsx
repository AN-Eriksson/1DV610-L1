import { useEffect, useState } from 'react'

export const NameDisplay = ({ name }) => {
  const [displayedString, setDisplayedString] = useState("")

  useEffect(() => {
    const translateToRobberLanguage = (text) => {
      const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'

      return text
        .split('')
        .map(char => {
          if (consonants.includes(char)) {
            return char + 'o' + char.toLowerCase()
          }
          return char
        })
        .join('')
    }

    const nameInRobberLanguage = translateToRobberLanguage(name)

    let currentStringIndex = 0

    const writeTimer = setInterval(() => {
      if (currentStringIndex < nameInRobberLanguage.length) {
        setDisplayedString(nameInRobberLanguage.slice(0, currentStringIndex + 1))
        currentStringIndex++
      } else {
        clearInterval(writeTimer)
      }
    }, 500)

    return () => clearInterval(writeTimer)
  }, [name])

  return (
    <div className="text-2xl font-bold">
      <h2>Ditt namn blir på rövarspråket..</h2>
      {displayedString}
    </div>
  )
}