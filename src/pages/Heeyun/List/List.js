import React from 'react'
import './List.scss';
import { useState, useEffect } from 'react';
import ImgList from '../../../components/imgList/ImgList'
import TopNav from '/Users/heeyun/Desktop/wecode/fullstack-3-React-Webucks-3/src/components/Nav/TopNav';


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
                    {imgData[0] && imgData[0].map(
                        (el,i)=>{
                                return (
                                < ImgList coffeeImg={el.img} coffeeName = {el.title} key={i}/>
                                );
                            }
                        )
                    }
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
                    {imgData[1] && imgData[1].map(
                            (el,i)=>{
                                return (
                                < ImgList coffeeImg={el.img} coffeeName = {el.title} key={i}/>
                                );
                            }
                        )
                    }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default List