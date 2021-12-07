import React, { useState } from "react";
import { useNavigate } from 'react-router';
import '../List/List.scss';


function CoffeeCard(props) {

    const navigate = useNavigate();
        const goToDetail = () => {
        navigate("/detail-haneul");
    }

    const [heart, setHeart] = useState(false);

    return (
        <>
            <li>
                <div className="coffee-list__box">
                    <img
                        src={props.item.img} alt="커피"
                        width="200px"
                        height="200px"
                        onClick={goToDetail}
                    />
                </div>
                <p className="coffee-list__name">
                {props.item.name} &nbsp;
                    <i
                        className={heart === true ? 'fas fa-heart heart' : 'far fa-heart'}
                        onClick={() => setHeart(!heart)}>
                    </i>
                </p>
            </li>
        </>
    )
}

export default CoffeeCard;
