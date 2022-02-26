import React from 'react'

const ImgDetail = ({coffeeImg, coffeeName}) =>{
    return(
        <div className='coffee-image'>
            <img src={coffeeImg} alt={coffeeName}/>
        </div>
        );
}

export default ImgDetail