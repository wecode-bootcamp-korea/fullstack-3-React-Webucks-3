import React from 'react'

const ImgDetail = (props) =>{
    return(
        <div className='coffee-image'>
            <img src={props.coffeeImg} alt={props.coffeeName}/>
        </div>
        );
}

export default ImgDetail