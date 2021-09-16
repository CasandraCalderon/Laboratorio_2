import React from 'react'

export const KeyComponent = ({ letter, handlerkey, status }) => {
    return (
        <div
            className= {status ? "disablediv" : ""} 
            onClick={() => {
            handlerkey(letter);
        }} 
        > {letter}</div>
    );
};
