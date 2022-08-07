// 7_5-4 How to Create Event handler with parameters


// summary : ami jodi kno ekta event handler ke call korte chai , parameter shoho she khetre shora shori event handler ke call na kore , ami ekta arrow func banabo and shetar vitor theke event handler ke 


//Cosmetic.js er full code
//before atorage

import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // cosmetic ta obj tai  destructure tao obj hbe 
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        // console.log('item added');/
        console.log('item added', id);
        //click korle inspact e clicked showing 

    }
    const addToCartWithParam = () => addToCart(id);
    return (
        <div className="product">
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id : {id}</small></p>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={() => addToCart(id)}>Add to Cart : Actual</button>
        </div>
    );
};

export default Cosmetic;







//without destructuring er code niche
// const Cosmetic = (props) => {
//     return (
//         <div>
//             <h2>Buy this: {props.cosmetic.name}</h2>
//             <p>Only for: ${props.cosmetic.price}</p>
//         </div>
//     );
// };

// export default Cosmetic;