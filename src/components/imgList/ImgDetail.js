import React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
const ImgDetail = (props) =>{
    return(
        <div className='coffee-image'>
            <img src={props.coffeeImg} alt={props.coffeeName}/>
        </div>
        );
}

export default ImgDetail