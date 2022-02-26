import React, { useState, useEffect } from 'react';
import './Detail.scss';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer/Footer';
import ImgDetail from '../../../components/imgList/ImgDetail';
// import { API } from '/Users/heeyun/Desktop/wecode/fullstack-3-React-Webucks-3/public/data/imgDetailData.json'

const Detail = () => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/imgDetailData.json')
      .then((res) => res.json())
      .then((data) => {
        setImgData(data);
      });
  }, []);

  const [heartColor, setHeartColor] = useState('black');
  function clickHeart() {
    if (heartColor === 'red') {
      return setHeartColor('black');
    } else {
      return setHeartColor('red');
    }
  }

  const [comment, setComment] = useState([]);

  const getComment = (event) => {
    if (event.key === 'Enter') {
      setComment(comment.concat(event.target.value));
      event.target.value = null;
    }
  };

  const Comment = (props) => {
    return <li>{props.comment}</li>;
  };

  return (
    <div className="Detail">
      <div className="container">
        <header>
          <TopNav />
        </header>
        <div className="boxes" id="second-box">
          <div className="title">콜드 브루</div>
          <div className="ul-box">
            <ul className="small-linkList">
              <li>홈</li>
              <i className="material-icons">keyboard_arrow_right</i>
              <li>MENU</li>
              <i className="material-icons">keyboard_arrow_right</i>
              <li>음료</li>
              <i className="material-icons">keyboard_arrow_right</i>
              <li>에스프레소</li>
              <i className="material-icons">keyboard_arrow_right</i>
              <li>커피 1</li>
            </ul>
          </div>
        </div>
        <section>
          {imgData.detailData &&
            imgData.detailData.map((el, i) => (
              <ImgDetail coffeeImg={el.img} coffeeName={el.title} key={i} />
            ))}
          <article>
            <div className="coffee-title">
              <h4 className="small-title">
                커피 1
                <br />
                <span className="small-title-English">Coffee 1</span>
              </h4>
              <span
                className="material-icons"
                id="heart"
                onClick={clickHeart}
                style={{ color: heartColor }}
              >
                favorite_border
              </span>
            </div>
            <div className="coffee-description">
              <p>
                달달한 커피에 바퀴벌레 한 마리와 쥐 발톱 3개, 닭 목 3개,
                지나가는 할아버지 머리카락 7가닥, 잡초 한 움큼, 다시마 한 스푼을
                넣어서 만들었으니 절대 드시지 마십시오!!!!!
              </p>
            </div>
            <div className="coffee-nutrition">
              <p>제품 영양 정보</p>
              <p>Tall(톨) / 355ml(12 fl oz)</p>
            </div>
            <div className="coffee-nutrition-detail">
              <div className="coffee-nutrition-detail-in">
                <ul id="left">
                  <li>
                    <span>1회 제공량 (kcal)</span>
                    <span>16000</span>
                  </li>
                  <li>
                    <span>포화지방 (g)</span>
                    <span>600</span>
                  </li>
                  <li>
                    <span>단백질 (g)</span>
                    <span>6</span>
                  </li>
                </ul>
              </div>
              <div className="coffee-nutrition-detail-in">
                <ul>
                  <li>
                    <span>나트륨 (mg)</span>
                    <span>2000</span>
                  </li>
                  <li>
                    <span>당류 (g)</span>
                    <span>540</span>
                  </li>
                  <li>
                    <span>카페인 (mg)</span>
                    <span>570</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="allergy">
              <div>알레르기 유발 요인: 할아버지 머리카락</div>
            </div>
            <div className="review">
              <h3>리뷰</h3>
              <div className="review-list">
                <ul>
                  <li>
                    <a href="https://www.naver.com/">coffee_lover</a>
                    <span>당장 환불해주세요</span>
                  </li>
                  <li>
                    <a href="https://www.naver.com/">webucks_hater</a>
                    <span>고소하겠습니다.</span>
                  </li>
                  <li>
                    <a href="https://www.naver.com/">webucks_killer</a>
                    <span>오함마 들고 찾아갑니다.</span>
                  </li>
                  {comment.map((comment, key, index) => {
                    return (
                      <Comment comment={comment} key={key} index={index} />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="review-input">
              <span>
                <input
                  type="text"
                  placeholder="리뷰를 입력해주세요"
                  onKeyPress={getComment}
                />
              </span>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
