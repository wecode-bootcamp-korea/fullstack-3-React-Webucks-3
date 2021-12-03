import "./List.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Topnav from "../Topnav/Topnav";
import CoffeeCard from "./CoffeeCard";

function ListMingi() {
	const [coffeeList, setCoffeeList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/data/mingi/coffees.json")
			.then((res) => res.json())
			.then((data) => {
				setCoffeeList(data);
			});
	}, []);

	// const [BrewedCoffeeList, setBrewedCoffeeList] = useState([]);

	// useEffect(() => {
	//     fetch('http://localhost:3000/data/brewedCoffee.json', {
	//       method: 'GET'
	//     })
	//       .then(res => res.json())
	//       .then(data => {
	//         setBrewedCoffeeList(data);
	//       });
	//   },[])

	console.log(coffeeList);
	return (
		<>
			<Topnav />
			<div className="List">
				<main className="wrapper">
					<section className="categoryName">
						<h3>콜드 브루 커피</h3>
						<FontAwesomeIcon icon={faCoffee} />
						<span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
					</section>
					<section className="menuList">
						{coffeeList.coldBrew &&
							coffeeList.coldBrew.map((coffee, index) => {
								return (
									<CoffeeCard
										image={coffee.image}
										explain={coffee.explain}
										id={coffee.id}
									/>
								);
							})}
					</section>
				</main>
				<main className="wrapper">
					<section className="categoryName">
						<h3>브루드 커피</h3>
						<FontAwesomeIcon icon={faCoffee} />
						<span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
					</section>
					<section className="menuList">
						{coffeeList.brewed &&
							coffeeList.brewed.map((coffee) => {
								return (
									<CoffeeCard image={coffee.image} explain={coffee.explain} />
								);
							})}
					</section>
				</main>
			</div>
		</>
	);
}

export default ListMingi;
