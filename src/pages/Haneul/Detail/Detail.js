import React, { useState, useEffect } from "react";
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import ReviewComment from '../components/ReviewComment';
import './Detail.scss';


function Deatil() {

  const [commentsMock, setCommentsMock] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/Haneul/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setCommentsMock(res);
      });
  }, []);

  const [inputText, setinputText] = useState([]);

  // 엔터키 이벤트
  const pressEnterEvent = (e) => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      let copy = [...inputText];
      copy.push(e.target.value);
      setinputText(copy);
      e.target.value = "";
    }
  };

  const [heartClick, setHeartClick] = useState(false);

  return (
    <div className="background">
      <TopNav />
      <section id="detail">
        <div className="container">
          <h1 className="detail-title">콜드 브루</h1>
          <div className="detail__route">
            홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카
          </div>
          <div className="detail-page">
            <div className="detail-page__img">
              <img alt="커피 사진" src="/images/Haneul/coffee.jpg" width="400px" />
            </div>
            <div className="detail-page__content">
              <div className="detail-page__content-title">
                <h2>화이트 초콜릿 모카</h2>
                <small>White Chocolate Moca</small>
                <i
                  className={heartClick ? 'fas fa-heart heart' : 'far fa-heart'}
                  id="detail-page__content-heart"
                  onClick={() => setHeartClick(!heartClick)}>
                </i>
              </div>
              <div className="detail-page__content-desc">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </div>
              <div className="nutrition-info">
                <h2>제품 영양 정보 <div>Tall(톨) / 355ml (12 fl oz)</div></h2>
                <div className="nutrition-info__list">
                  <div className="nutrition-info__list-1">
                    <ul>
                      <li>
                        <div>1회 제공량 (kcal)</div>
                        <div>345</div>
                      </li>
                      <li>
                        <div>포화지방 (g)</div>
                        <div>11</div>
                      </li>
                      <li>
                        <div>단백질 (g)</div>
                        <div>11</div>
                      </li>
                    </ul>
                  </div>
                  <div className="nutrition-info__list-2">
                    <ul>
                      <li>
                        <div>나트륨 (g)</div>
                        <div>150</div>
                      </li>
                      <li>
                        <div>당류 (g)</div>
                        <div>35</div>
                      </li>
                      <li>
                        <div>카페인 (mg)</div>
                        <div>75</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nutrition-info__allergy">
                  알레르기 유발 요인 : 우유
                </div>
                <div className="nutrition-info__review">
                  <h3>리뷰</h3>
                  <div className="nutrition-info__review-comment">
                    {/* 기존 댓글 */}
                    {commentsMock.map((commentMock, index) => {
                      return (
                        <ReviewComment 
                          key={index}
                          text={commentMock.text}
                          user={commentMock.user}
                        />);
                    })}
                    {/* 새로 생성되는 댓글 */}
                    {inputText.map((e, i) => {
                      return (
                        <ReviewComment
                          key={i}
                          text={e} 
                          index={i} 
                          inputText={inputText} 
                          setinputText={setinputText}
                        />);
                    })}
                  </div>
                  <input 
                    type="text" 
                    id="input-review" 
                    placeholder="리뷰를 입력해주세요." 
                    onKeyDown={(e) => { pressEnterEvent(e); }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <BottomNav />
      </footer>
    </div>
  );
}

export default Deatil;