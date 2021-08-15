// Need to import React for programme to understand JSX
import React from 'react';

// destructuring props inside the params
const Card = ({id, name, email} ) => {
    return (
        // if its js syntax, need wrap in {}
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
