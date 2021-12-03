import React from 'react'
import './List.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ImgList from '../../../components/imgList/ImgList'
import TopNav from '/Users/heeyun/Desktop/wecode/webucks-project/src/components/Nav/TopNav';


const List = () => {
    const [imgData, setImgData] = useState([]);
      
    useEffect(() => {
        fetch('http://localhost:3000/data/imgData.json', {
        method: 'GET' 
        })              
        .then(res => res.json())
        .then(data => {
            setImgData(data);
        });
    },[])

    return (
        <div className = 'List'>
            <section>
                <TopNav />
                <div className='boxes' id='box-title'>
                    <h3 className='small-title'>콜드 브루 커피</h3>
                    <span className="material-icons">
                        coffee
                    </span>
                    <span className='small-description'>디카페인 에스프레소샷 추가 가능(일부 음료 제외)</span>
                </div>
                <div className='photo'>
                    <ul className='photoList'>
                        {imgData.map((el)=>{
                            return (
                            < ImgList coffeeImg={el.img} coffeeName = {el.title}/>
                            );
                        })}
                    </ul> 
                </div>
                <div className='boxes' id='box-title'>
                    <h3 className='small-title'>브루드 커피</h3>
                    <span className="material-icons">
                        coffee
                    </span>
                    <span className='small-description'>디카페인 에스프레소샷 추가 가능(일부 음료 제외)</span>
                </div>
                <div className='photo'>
                    <ul className='photoList'>
                    {imgData.map((el)=>{
                            return (
                            < ImgList coffeeImg={el.img} coffeeName = {el.title}/>
                            );
                        })}
                        {/* <div className='photoBox'>
                            <li>
                                <img src='imgs/HeeYun/blackCoffee.jpg' alt='블랙커피' />
                            </li>
                            <p>Black Coffee</p>
                        </div>
                        <div className="photoBox">
                            <li>
                                <img src='imgs/HeeYun/coffee11.jpg' alt='커피11' />
                            </li> 
                            <p>커피 11</p>
                        </div>
                        <div className="photoBox">
                            <li>
                                <img src='imgs/HeeYun/coffee12.jpg' alt='커피12' />
                            </li> 
                            <p>커피 12</p>
                        </div>
                        <div className='photoBox'>
                            <li>
                                <img src='imgs/HeeYun/coffee13.jpg' alt='커피13' />
                            </li>
                            <p>커피 13</p>
                        </div>
                        <div className='photoBox'>
                            <li>
                                <img src='imgs/HeeYun/coffee14.jpg' alt='커피14' />
                            </li>
                            <p>커피 14</p>
                        </div> */}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default List