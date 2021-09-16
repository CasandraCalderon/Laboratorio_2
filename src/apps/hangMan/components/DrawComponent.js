import React from 'react'

export const DrawComponent = ({ counter }) => {
    return (
        <div>
             {counter >= 1? <img width = "400" src={`/assets/img${counter}.png`} alt=""/> : 
             <div>
                <h2>GAME OVER</h2>
                <img width = "400" src={`/assets/img${counter}.png`} alt=""/>
            </div>}
            
        </div>
    );
};
