import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CoffeeCard.scss";

function CoffeeCard(props) {
  // useNavigate를 이용한 방법
  //   const navigate = useNavigate();
  //   const goToList = () => {
  //     navigate("/detail-jongmin");
  //   };
  //   return (
  //     <div className="CoffeeCard">
  //       <div className="imgHover">
  //         <img alt="{props.name}" src={props.image} onClick={goToList} />
  //       </div>
  //       <p className="coffeeTitle">{props.name}</p>
  //     </div>
  //   );

  // 좋아요(하트) 클릭 기능 구현
  const [onHeart, setOnHeart] = useState("🤍");
  const heartSelection = () => {
    if (onHeart === "❤️") {
      return "🤍";
    } else if (onHeart === "🤍") {
      return "❤️";
    }
  };

  // Link를 이용한 방법
  return (
    <div className="CoffeeCard">
      <div className="imgHover">
        <Link to="/detail-jongmin" className="coffeeDetail">
          <img alt={props.name} src={props.image} />
        </Link>
      </div>
      <div className="coffeeTitle">
        <p>{props.name}</p>
        <p id="heart" onClick={() => setOnHeart(heartSelection)}>
          {onHeart}
        </p>
      </div>
    </div>
  );
}

export default CoffeeCard;
