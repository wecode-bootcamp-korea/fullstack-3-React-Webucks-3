import React from 'react';
import { useState } from "react";
import '../Detail/Detail.scss'

function ReviewComment(props) {

    const [heart, setHeart] = useState(false);
    
    return (
        <div className="nutrition-info__review-comment__inner">
            <div className="commentText">
                <span>{props.user ? props.user : (sessionStorage.getItem("id"))}</span>: {props.text}
            </div>
            <i
                className={heart === true ? 'fas fa-heart heart' : 'far fa-heart'}
                onClick={() => setHeart(!heart)}>
            </i>
            <i
                className="fas fa-trash"
                onClick={(e) => {
                e.target.parentElement.remove();
                }}>
            </i>
        </div>
    );
}

export default ReviewComment;