import React from 'react';
import Item from './Item';

function Lista(props) {
    return(
        
        <div className="lista">
            {
                props.items.map(item =>
                    <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    rating={item.rating} />
                )
            }
        </div>
    );
}

export default Lista;