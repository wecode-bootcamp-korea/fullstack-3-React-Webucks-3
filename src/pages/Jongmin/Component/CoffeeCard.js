import React from "react";
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

  //   Link를 이용한 방법
  return (
    <div className="CoffeeCard">
      <div className="imgHover">
        <Link to="/detail-jongmin" className="coffeeDetail">
          <img alt={props.name} src={props.image} />
        </Link>
      </div>
      <p className="coffeeTitle">{props.name}</p>
    </div>
  );
}

export default CoffeeCard;
