import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SingleComment(props) {
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
        <div className="comment">
            <div class="longment">
                <span className="id">{props.id}</span>
                <span className="ment">{props.e}
                </span>
            </div>
            <div class="longment-button">
                <button className="deletebutton" onClick={(e) => { e.target.parentElement.parentElement.remove(); }}>삭제</button>
                <a href="#" className="commentheart" id={props.index}>
                    <FontAwesomeIcon
                        icon={heartshape}
                        onClick={click}
                    />
                </a>
            </div>
        </div >
    )
}

export default SingleComment;