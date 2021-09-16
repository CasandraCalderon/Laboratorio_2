import React from 'react'

export const LetterComponent = ({ letter, status }) => {
    return (
        <div>
         {status? letter : "?"}  
        </div>
    )
}
