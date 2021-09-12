import React from 'react'

export const CardComponent = ({ item, handlerClick}) => {
    return (
        <div className='item' 
        key={item.id} onClick={ () => {
            handlerClick(item);
        }}>
            {item.state === true?
            (<div className = 'item1'>{item.frontend}</div>) : 
            (<div className = 'container'>{item.backend}</div>)}

        </div>
    );
}
