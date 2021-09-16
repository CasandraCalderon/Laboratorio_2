import React, { useState } from 'react'
import { DrawComponent } from './components/DrawComponent';
import { KeyBoardComponent } from './components/KeyBoardComponent';
import { WordComponent } from './components/WordComponent';
import { UseCounter } from './hooks/UseCounter';
import { UseWord } from './hooks/UseWord';
import "./styles.css";
export const HangManComponent = () => {
    const [listWord, setListWord, ifContains, ifValid] = UseWord ();
    const [counter, ,decrementCounter] = UseCounter(6, { max : 6, min : 0});
    const handlerKeyPress = (key) => {
        const list = ifContains(key);
        setListWord(list);
        if (!ifValid(key)){
            decrementCounter();
        };
    };
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            < DrawComponent counter = {counter}/>
            < WordComponent  listWord = {listWord} />
            < KeyBoardComponent handlerKeyPress = {handlerKeyPress}/>
        </div>
    )
}
 