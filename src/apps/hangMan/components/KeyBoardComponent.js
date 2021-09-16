import React from 'react'
import { UseKeyBoard } from '../hooks/UseKeyBoard';
import { KeyComponent } from './KeyComponent';




export const KeyBoardComponent = ( { handlerKeyPress } ) => {
    const [keyBoard, setKeyBoard] = UseKeyBoard();
    const handlerkey = (key) => {
        const newKeyBoard = keyBoard.map (item => {
            const {key: keylist} = item;
            if (key === keylist){
                item.status = true;
            }
            return item;
        });
        setKeyBoard(newKeyBoard);
        handlerKeyPress(key);

    };
    return (
        <div className = "flex-container"> 
            {keyBoard.map((item) => (
                <KeyComponent key={item.id} 
                letter={item.key} handlerkey={handlerkey} 
                status = {item.status}/>
         
            ))}</div>
    );
};

