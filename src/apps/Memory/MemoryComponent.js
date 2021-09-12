import React, { useEffect, useState } from 'react';
import { CardComponent } from './CardComponent';
import { createBoard } from './createBoard';
import "./styles.css";
let list = [];
let twice = [];
let point = 50;
export const MemoryComponent = () => {
    useEffect(() => {
        list = createBoard(10);
        setStateBoard(list);
    }, []);
    
    const [stateBoard, setStateBoard] = useState(list);
    const handlerClick = ({id}) =>{
        if (twice.length === 2) {
            twice = [];
        }
        const item = stateBoard.find((item) => item.id === id);
        if (twice.length === 0){
            twice = [...twice, item];
        } else if (twice.length === 1) {
            twice = [...twice, item];
            const [item1] = twice;
            if (item1.key !== item.key) {
                console.log("No son iguales");
                point = point - 5;
                setTimeout (() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if (item.done === false){
                            item.state = false;
                            item.styles = "item";
                        }
                        return item;
                    });
                    setStateBoard(newStateBoard);
                }, 1000);
                if (point === 0){
                    if(!alert('GAME OVER')){window.location.reload();}
                }
            } else {
                const [item1, item2] = twice;
                const newStateBoard = stateBoard.map(item => {
                    if (item.id === item1.id || item.id === item2.id) {
                        console.log("Son iguales!");
                        item.done = true;
                    }
                    return item;
                    
                });
                point = point + 25;
                setStateBoard(newStateBoard);
            }
        }
        const newStateBoard = stateBoard.map ((item) => {
            if (item.id === id){
                item.state = true;
                item.style = "item1";
            }
            return item;
        });
        setStateBoard(newStateBoard);
        
    };
    return (
        <div>
            <h1>Memory App</h1>
            <hr />
            <h1>Score: {point}</h1>
            <div className="container">
                {stateBoard.map((item) => (
                <CardComponent key = {item.id} item = {item}
                handlerClick = {handlerClick} />
                ))}
            </div>
        </div>
    );
}
