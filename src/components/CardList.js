import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        // can add props/properties (like html attributes)
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        // need to add key prop so easier for virtual dom to manipulate the cards if needed
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}/>  
                    );
                })
            }
        </div>
    );
}

export default CardList;
