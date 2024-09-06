import { useState } from 'react';
export default function House({ img, favorite, title, distance, date, price, rates }) {
    const image = require('./../images/houseimages/' + img);
const [heartActive, setheartActive] = useState(0);
    return (<>
        <div className="House ">
            {favorite && <span className="fav">Guests Favorite</span>}
            <img src={image} />
            <div className="heart" id={heartActive && "active"} onClick={()=>setheartActive(!heartActive)}><i class="fa-solid fa-heart"></i></div>
             <div className="rates"><i class="fa-solid fa-star"></i>{rates}</div>
            <div className="Title">{title}  </div>
            <span>{distance}</span><br/>
            <span>{date}</span>
            <div className="price">₹{price} <span>night</span></div>
        </div>
    </>)
}