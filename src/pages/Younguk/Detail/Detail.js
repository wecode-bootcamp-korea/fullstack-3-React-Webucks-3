import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import React from 'react';
import './Detail.scss';
import TopNav from '../TopNav';
import SingleComment from "./SingleComment";


function Detail() {
    const [normalComment, normalCommentSet] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/data/commentdata.json')
            .then(res => res.json())
            .then(res =>
                normalCommentSet(res));
    }, [])


    const [commentData, commentAdder] = useState([]);
    const enter = (e) => {
        if (e.key === 'Enter') {
            let newArr = [...commentData];
            newArr.push(e.target.value);
            commentAdder(newArr);
            e.target.value = '';
        }
    }


    const [heartshapetop, heartshapeChange] = useState(regularHeart);
    function clickTop() {
        if (heartshapetop === regularHeart) {
            heartshapeChange(solidHeart);
        }
        else {
            heartshapeChange(regularHeart);
        }
    }


    return (
        <>
            <TopNav />

            <section>
                <div className="container" id="one">

                    <div className="first">
                        <p className="coldbrew">콜드 브루</p>
                        <img src="/images/coffeedetailpage.PNG" alt="콜드브루" />
                    </div>

                    <div className="second">
                        <br />
                        <p className="gray">홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카</p>

                        <div id="fifth">
                            <div className="emojiright">
                                <p className="coffeename">화이트 초콜릿 모카</p>
                                <p className="coffeename2">White Chocolate Mocha</p>
                            </div>
                            <div id="heart2">
                                <a href="#"><FontAwesomeIcon
                                    icon={heartshapetop}
                                    onClick={clickTop}
                                />
                                </a>
                            </div>
                        </div>

                        <p className="seconddetail">달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
                            휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피</p>

                        <div className="productdetail">
                            <span>제품 영양 정보</span>
                            <span>Tall(톨) / 355ml (12 fl oz)</span>
                        </div>

                        <div className="productdetail2">
                            <div className="boxone">
                                <ul>
                                    <li>
                                        <span className="l">1회 지공량(kcal)</span>
                                        <span>345</span>
                                    </li>
                                    <li>
                                        <span className="l">포화지방 (g)</span>
                                        <span>11</span>
                                    </li>
                                    <li>
                                        <span className="l">단백질 (g)</span>
                                        <span>11</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="boxtwo">
                                <ul>
                                    <li>
                                        <span className="l">나트륨(mg)</span>
                                        <span>150</span>
                                    </li>
                                    <li>
                                        <span className="l">당류 (g)</span>
                                        <span>35</span>
                                    </li>
                                    <li>
                                        <span className="l">카페인 (mg)</span>
                                        <span>75</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="allegy">알레르기 유발 요인 : 우유</div>

                        <p className="reviewnav">리뷰</p>

                        <div className="Allcomment">
                            {
                                normalComment && normalComment.map((e, i) => {
                                    return (
                                        <SingleComment
                                            id={e.id}
                                            e={e.ment}
                                            index={i}
                                        />
                                    )
                                })
                            }


                        </div>

                        <div className="Allcomment">
                            {
                                commentData.map((e, i) => {
                                    return (
                                        <SingleComment
                                            id={"G-Dragon"}
                                            e={e}
                                            index={i}
                                        />
                                    )
                                })
                            }
                        </div>

                        <input text="" placeholder="리뷰를 입력해주세요" className="reviewcomment"
                            onKeyPress={(e) => enter(e)} />
                    </div>
                </div>
            </section>

            <footer>
                <div className="bottomzone">
                    <div>
                        <p>COMPANY</p>
                        <ul>
                            <li>한눈에 보기</li>
                            <li>스타벅스 사명</li>
                            <li>스타벅스 소개</li>
                            <li>국내 뉴스룸</li>
                            <li>세계의 스타벅스</li>
                            <li>글로벌 뉴스룸</li>
                        </ul>
                    </div>

                    <div>
                        <p>CORPORATE SALES</p>
                        <ul>
                            <li>단체 및 기업 구매 안내</li>
                        </ul>
                    </div>

                    <div>
                        <p>PARTNERSHIP</p>
                        <ul>
                            <li>신규 입점 제의</li>
                            <li>협력 고객사 등록 신청</li>
                        </ul>
                    </div>

                    <div>
                        <p>ONLINE COMMUNITY</p>
                        <ul>
                            <li>페이스북</li>
                            <li>트위터</li>
                            <li>유튜브</li>
                            <li>블로그</li>
                            <li>인스타그램</li>
                        </ul>
                    </div>

                    <div>
                        <p>RECRUIT</p>
                        <ul>
                            <li>채용 소개</li>
                            <li>채용 지원하기</li>
                        </ul>
                    </div>

                    <div>
                        <p>WEBUCKS</p>
                    </div>

                </div>
            </footer>
        </>
    );
}


export default Detail