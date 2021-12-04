import React, { useState } from "react";
import TopNav from "../Component/TopNav";
import "./Detail.scss";

function Detail() {
  const [onHeart, setOnHeart] = useState("🤍");

  const heartSelection = () => {
    if (onHeart === "❤️") {
      return "🤍";
    } else if (onHeart === "🤍") {
      return "❤️";
    }
  };

  return (
    <>
      <div className="Detail">
        <TopNav />
        <header id="mainHeader">
          <div id="mainTitle">콜드 브루</div>
          <div id="map">
            <a className="menuClass" href="##">
              홈
            </a>
            <span>→</span>
            <a className="menuClass" href="##">
              MENU
            </a>
            <span>→</span>
            <a className="menuClass" href="##">
              음료
            </a>
            <span>→</span>
            <a className="menuClass" href="##">
              에스프레소
            </a>
            <span>→</span>
            <a className="menuClass" href="##">
              화이트 초콜릿 모카
            </a>
          </div>
        </header>
        <section id="Information">
          <div>
            <img
              className="detailImage"
              alt="화이트 초콜릿 모카"
              src="/images/Jongmin/화이트 초콜릿 모카.jpeg"
            />
          </div>
          <section id="detailInformation">
            <div id="detailTitle">
              <div id="detailText">
                <p id="textKor">화이트 초콜릿 모카</p>
                <p id="textEng">White Chocolate Mocha</p>
              </div>
              <p id="heart" onClick={() => setOnHeart(heartSelection)}>
                {onHeart}
              </p>
            </div>
            <div id="descripttion">
              <p>
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </p>
              <div id="ingredients">
                <div id="ingredientsTitle">
                  <p>제품 영양 정보</p>
                  <p>Tall(톨) / 355ml (12 fl ox)</p>
                </div>
                <div id="ingredientsTable">
                  <div id="ingredientsTableDivide1">
                    <div className="ingredientsTablePart1">
                      <p className="ingredientText">1회 제공량 (kcal)</p>
                      <p className="ingredientText">포화지방 (g)</p>
                      <p className="ingredientText">단백질 (g)</p>
                    </div>
                    <div className="ingredientsTablePart2">
                      <p className="ingredientText">345</p>
                      <p className="ingredientText">11</p>
                      <p className="ingredientText">11</p>
                    </div>
                  </div>
                  <div id="ingredientsTableDivide2">
                    <div className="ingredientsTablePart1">
                      <p className="ingredientText">나트륨 (mg)</p>
                      <p className="ingredientText">당류 (g)</p>
                      <p className="ingredientText">카페인 (mg)</p>
                    </div>
                    <div className="ingredientsTablePart2">
                      <p className="ingredientText">150</p>
                      <p className="ingredientText">35</p>
                      <p className="ingredientText">75</p>
                    </div>
                  </div>
                </div>
                <div id="ingredientsAllergie">알레르기 유발 요인 : 우유</div>
              </div>
            </div>
            <div id="reviewContainer">
              <div id="reviewTitle">리뷰</div>
              <div id="reviewDetail">
                <div className="reviewDetailPart">
                  <div className="reviewID">coff_lover</div>
                  <div className="reviewComment">너무 맛있어요!</div>
                </div>
                <div className="reviewDetailPart">
                  <div className="reviewID">CHOCO7</div>
                  <div className="reviewComment">
                    오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                  </div>
                </div>
                <div className="reviewDetailPart">
                  <div className="reviewID">legend_dev</div>
                  <div className="reviewComment">
                    진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                    모카는 전설이다. 진짜 화이트 초...
                  </div>
                </div>
              </div>
              <input
                id="reviewMessage"
                type="text"
                placeholder="리뷰를 입력해주세요."
              />
            </div>
          </section>
        </section>
        <footer>
          <div>
            <header className="footerTitle">COMPANY</header>
            <div className="footerElements">한눈에 보기</div>
            <div className="footerElements">위벅스 사명</div>
            <div className="footerElements">위벅스 소개</div>
            <div className="footerElements">국내 뉴스룸</div>
            <div className="footerElements">세계의 위벅스</div>
            <div className="footerElements">글로벌 뉴스룸</div>
          </div>
          <div>
            <header className="footerTitle">CORPORATE SALES</header>
            <div className="footerElements">단체 및 기업 구매 안내</div>
          </div>
          <div>
            <header className="footerTitle">PARTNERSHIP</header>
            <div className="footerElements">신규 입점 제의</div>
            <div className="footerElements">협력 고객사 등록 신청</div>
          </div>
          <div>
            <header className="footerTitle">ONLINE COMMUNITY</header>
            <div className="footerElements">페이스북</div>
            <div className="footerElements">트위터</div>
            <div className="footerElements">유튜브</div>
            <div className="footerElements">블로그</div>
            <div className="footerElements">인스타그램</div>
          </div>
          <div>
            <header className="footerTitle">RECRUIT</header>
            <div className="footerElements">채용 소개</div>
            <div className="footerElements">채용 지원하기</div>
          </div>
          <div>
            <header className="footerTitle">WEBUCKS</header>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Detail;
