import React from 'react';
const Card =({name, email, id, username})=>{
    return (
    <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
    <img alt ='robots' src={`https://robohash.org/${id}?200x200`}/>
    <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    </div>
    </div>
    );
}

export default Card;  