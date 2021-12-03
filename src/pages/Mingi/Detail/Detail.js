import React, { useState } from "react";
import "./Detail.scss";
import Topnav from "../Topnav/Topnav";
import HeartBtn from "../Heart/Heart";
function DetailMingi() {
	// const [blankColor, setColor] = useState("black");

	// const [blankOpacity, setBlankOpacity] = useState("0.4");

	// const [solidOpacity, setSolidOpacity] = useState("0");

	// function heartChange(e) {
	// 	if (blankColor === "black") {
	// 		e.preventDefault();
	// 		setColor("red");
	// 		setBlankOpacity("1");
	// 		setSolidOpacity("0.4");
	// 	} else {
	// 		e.preventDefault();
	// 		setColor("black");
	// 		setBlankOpacity("0.4");
	// 		setSolidOpacity("0");
	// 	}
	// }

	const [id, setId] = useState("");
	const handleIdInput = (e) => {
		setId(e.target.value);
	};

	const [review, setReview] = useState("");
	const handleReviewInput = (e) => {
		setReview(e.target.value);
	};

	const [reviewsList, setList] = useState([]);

	const enter = (e) => {
		if (e.key === "Enter") {
			setList(reviewsList.concat({ id: id, review: review }));
			setId("");
			setReview("");
		}
	};

	return (
		<>
			<Topnav />
			<div className="Detail">
				<main>
					<h1>콜드 브루</h1>
					<nav>
						<p>홈 &gt; MENU &gt; 음료 &gt; 콜드 브루 커피 &gt; 콜드 브루</p>
					</nav>
					<section className="content">
						<section className="photo">
							<div className="imgBox">
								<img
									src="images/Mingi/돌체 콜드 브루.jpg"
									alt="돌체 콜드 브루"
								/>
							</div>
						</section>
						<section className="info" id="ii">
							<section className="coffeeName">
								<h2>
									돌체 콜드 브루
									<br />
									<span>Dolce Cold Brew</span>
								</h2>
								<HeartBtn />
							</section>
							<section className="comment">
								<p>
									무더운 여름철,
									<br />
									동남아 휴가지에서 즐기는 커피를 떠오르게 하는
									<br />
									스타벅스 음료의 베스트 x 베스트 조합인
									<br />
									돌체 콜드 브루를 만나보세요!
								</p>
							</section>
							<section className="nutrition">
								<p>제품 영양 정보</p>
								<p>Tall(톨) / 355ml (12 fl oz)</p>
							</section>
							<section className="detailInfo">
								<section className="detailValue">
									<p>
										<span>1회제공량</span>
										<span>345</span>
									</p>
									<p>
										<span>포화지방</span>
										<span>11</span>
									</p>
									<p>
										<span>단백질</span>
										<span>11</span>
									</p>
								</section>
								<section className="detailValue">
									<p>
										<span>나트륨</span>
										<span>150</span>
									</p>
									<p>
										<span>당류</span>
										<span>35</span>
									</p>
									<p>
										<span>카페인</span>
										<span>75</span>
									</p>
								</section>
							</section>
							<section className="warning">
								<div>알레르기 유발요인 : 우유</div>
							</section>
							<section className="reviewBox">
								<h3>리뷰</h3>
								<section id="reviews">
									{reviewsList.map((el) => {
										return (
											<li>
												<span className="idOutput">{el.id}</span>
												<span className="reviewOutput">{el.review}</span>
											</li>
										);
									})}
								</section>
								<input
									className="idInput"
									type="text"
									placeholder="ID"
									onChange={handleIdInput}
									value={id}
								/>
								<input
									className="reviewInput"
									type="text"
									placeholder="리뷰를 입력해주세요."
									onChange={handleReviewInput}
									value={review}
									onKeyPress={enter}
								/>
							</section>
						</section>
					</section>
				</main>
				<footer>
					<section className="company">
						<p>COMPANY</p>
						<a href="#">한눈에 보기</a>
						<a href="#">스타벅스 사명</a>
						<a href="#">스타벅스 소개</a>
						<a href="#">국내 뉴스룸</a>
						<a href="#">세계의 스타벅스</a>
						<a href="#">글로벌 뉴스룸</a>
					</section>
					<section className="corporateSales">
						<p>CORPORATE SALES</p>
						<a href="#">단체 및 기업 구매 안내</a>
					</section>
					<section className="partnership">
						<p>PARTNERSHIP</p>
						<a href="#">신규 입점 제의</a>
						<a href="#">협력 고객사 등록 신청</a>
					</section>
					<section className="onlineCommunity">
						<p>ONLINE COMMUNITY</p>
						<a href="#">페이스북</a>
						<a href="#">트위터</a>
						<a href="#">유튜브</a>
						<a href="#">블로그</a>
						<a href="#">인스타그램</a>
					</section>
					<section className="recruit">
						<p>RECRUIT</p>
						<a href="#">채용 소개</a>
						<a href="#">채용 지원하기</a>
					</section>
					<section className="webucks">
						<p>WEBUCKS</p>
					</section>
				</footer>
				<script src="js/detail.js"></script>
			</div>
		</>
	);
}

export default DetailMingi;
