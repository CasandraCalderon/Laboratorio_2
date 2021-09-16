import React, { useEffect } from 'react'
import { LetterComponent } from './LetterComponent';

export const WordComponent = ( { listWord } ) => {
    
    return (
        <div className = "word">
            {listWord.map((item) => (
            <LetterComponent 
            key={item.id} 
            letter= {item.letter}
            status = {item.status} />
            ))}
            
        </div>
    );
};
