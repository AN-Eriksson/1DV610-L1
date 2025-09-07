import { useState } from 'react'

export const RobberLanguage = ({ name }) => {
    const [showRobber, setShowRobber] = useState(false)

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

    const robberName = translateToRobberLanguage(name)

    return (
        <div className="mt-6 max-w-md mx-auto">
            <button
                onClick={() => setShowRobber(true)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 block mx-auto"
            >
                Visa på rövarspråket! 🏴‍☠️
            </button>

            {showRobber && (
                <div className="mt-4 p-6 bg-green-100 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-center text-green-800">
                        Ditt namn på rövarspråket:
                    </h3>
                    <div className="text-2xl font-bold text-center text-green-700 bg-white p-4 rounded shadow">
                        {robberName}
                    </div>
                </div>
            )}
        </div>
    )
}