import React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
const ImgList = (props) =>{
    return(
        <div className="photoBox">
            < Link to = '/detail'>
                <li>
                    <img src={props.coffeeImg} alt={props.coffeeName} />
                </li> 
                <p>{props.coffeeName}</p>
            </Link>
        </div> );
}

export default ImgList
