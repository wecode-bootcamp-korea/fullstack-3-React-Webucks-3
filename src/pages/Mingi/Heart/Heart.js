import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; //
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function HeartBtn() {
	const [blankColor, setColor] = useState("black");

	const [blankOpacity, setBlankOpacity] = useState("0.5");

	const [solidOpacity, setSolidOpacity] = useState("0");

	function heartChange(e) {
		if (blankColor === "black") {
			e.preventDefault();
			setColor("red");
			setBlankOpacity("0.5");
			setSolidOpacity("0.5");
		} else {
			e.preventDefault();
			setColor("black");
			setBlankOpacity("0.5");
			setSolidOpacity("0");
		}
	}

	return (
		<div className="HeartBtn">
			<a className="heart" onClick={heartChange} href="">
				<i
					className="blankHeart"
					style={{ opacity: blankOpacity, color: blankColor }}
				>
					<FontAwesomeIcon icon={regularHeart} />
				</i>
				<i className="solidHeart" style={{ opacity: solidOpacity }}>
					<FontAwesomeIcon icon={solidHeart} />
				</i>
			</a>
		</div>
	);
}

export default HeartBtn;
