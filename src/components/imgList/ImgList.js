import React from 'react'
import {Link} from "react-router-dom";
const ImgList = ({coffeeImg, coffeeName}) =>{
    return(
        <div className="photoBox">
            < Link to = '/detail' style={{textDecoration : 'none'}}>
                <li>
                    <img src={coffeeImg} alt={coffeeName} />
                </li> 
                <p>{coffeeName}</p>
            </Link>
        </div> );
}

export default ImgList
