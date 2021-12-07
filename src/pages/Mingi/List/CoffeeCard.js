import "./CoffeeCard.scss";
import { useNavigate } from "react-router-dom";
import HeartBtn from "../Heart/Heart";

function CoffeeCard(props) {
	const navigate = useNavigate();

	const goToDetail = () => {
		navigate("/detail-Mingi");
	};

	return (
		<div className="CoffeeCard">
			<li className="coffee" key={props.id}>
				<div className="imgBox" onClick={goToDetail}>
					<img src={props.image} alt={props.explain} height="200px" />
				</div>
				<div className="text">
					<span onClick={goToDetail}>{props.explain}</span>
					<HeartBtn />
				</div>
			</li>
		</div>
	);
}

export default CoffeeCard;
