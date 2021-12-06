import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

import './List.scss';
import TopNav from '../TopNav';


function List() {
    const navigate = useNavigate();
    const goToDetail = () => {
        navigate("/Detail");
    }

    const [coffeeCard, setCoffeeCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data/coffeelistdata.json')
            .then(res => res.json())
            .then(res =>
                setCoffeeCard(res));
    }, [])

    return (
        <>
            <TopNav />
            <div className="menu-banner">
                <span className="cold">콜드 브루 커피</span>
                <img src="/images/coffeeicon.png" alt="커피" className="icon" />
                <span className="dcf">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
            </div>

            <div className="menu-list">
                <div className="linetemplate">
                    <ul>
                        {coffeeCard.coffeelist1 && coffeeCard.coffeelist1.map((e, i) => {
                            return (
                                <CoffeeCard
                                    item={e}
                                />
                            )
                        })}

                    </ul>
                </div>
            </div>

            <div className="menu-banner">
                <span className="cold">브루드 커피</span>
                <img src="/images/coffeeicon.png" alt="커피" className="icon" />
                <span className="dcf">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
            </div>

            <div className="menu-list">
                <div className="linetemplate">
                    <ul>

                        {coffeeCard.coffeelist2 && coffeeCard.coffeelist2.map((e, i) => {
                            return (
                                <CoffeeCard
                                    item={e}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default List;