import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState, } from 'react';

function CoffeeCard(props) {

    const [heartshape, heartshapeChange] = useState(regularHeart);
    function click() {
        if (heartshape === regularHeart) {
            heartshapeChange(solidHeart);
        }
        else {
            heartshapeChange(regularHeart);
        }
    }

    return (
        <li><Link to="/Detail"><img src={props.item.imgsrc} alt="커피이미지" /></Link>
            <div className="nameandheart">
                <span><Link to="/Detail">{props.item.coffeename}</Link></span>
                <a href="#" className="heart3"><FontAwesomeIcon icon={heartshape} onClick={click} /></a>
            </div>
        </li>
    )
}

export default CoffeeCard;