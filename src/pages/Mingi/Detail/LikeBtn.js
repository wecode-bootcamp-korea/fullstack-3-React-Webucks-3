import React, { useState } from "react";
import "./LikeBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function LikeBtn() {
	const [likeColor, setLikeColor] = useState("black");

	const [likeOpacity, setLikeOpacity] = useState("0.3");

	const [hateColor, setHateColor] = useState("black");

	const [hateOpacity, setHateOpacity] = useState("0.3");

	function likeChange(e) {
		if (likeColor === "black") {
			e.preventDefault();
			setLikeColor("blue");
			setLikeOpacity("0.6");
		} else {
			e.preventDefault();
			setLikeColor("black");
			setLikeOpacity("0.3");
		}
	}

	function hateChange(e) {
		if (hateColor === "black") {
			e.preventDefault();
			setHateColor("red");
			setHateOpacity("0.6");
		} else {
			e.preventDefault();
			setHateColor("black");
			setHateOpacity("0.3");
		}
	}

	return (
		<div className="LikeBtn">
			<div
				onClick={likeChange}
				className="like"
				style={{ color: likeColor, opacity: likeOpacity }}
			>
				<FontAwesomeIcon icon={faThumbsUp} />
			</div>
			<div
				onClick={hateChange}
				className="hate"
				style={{ color: hateColor, opacity: hateOpacity }}
			>
				<FontAwesomeIcon icon={faThumbsUp} />
			</div>
		</div>
	);
}

export default LikeBtn;
