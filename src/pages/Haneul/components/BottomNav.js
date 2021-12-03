import React from 'react';

function BottomNav() {
    return (
        <div className="container">
          <div className="footer__company">
            <div className="footer-title">COMPANY</div>
            <div className="footer-list">
              <ul>
                <li>한눈에 보기</li>
                <li>스타벅스 사명</li>
                <li>스타벅스 소개</li>
                <li>국내 뉴스룸</li>
                <li>세계의 스타벅스</li>
                <li>글로벌 뉴스룸</li>
              </ul>
            </div>
          </div>
          <div className="footer__corpoarte">
            <div className="footer-title">CORPORATE SALES</div>
            <div className="footer-list">
              <ul>
                <li>단체 및 기업 구매 안내</li>
              </ul>
            </div>
          </div>
          <div className="footer__partnership">
            <div className="footer-title">PARTNERSHIP</div>
            <div className="footer-list">
              <ul>
                <li>신규 입점 제의</li>
                <li>협력 고객사 등록 신청</li>
              </ul>
            </div>
          </div>
          <div className="footer__community">
            <div className="footer-title">ONLINE COMMUNITY</div>
            <div className="footer-list">
              <ul>
                <li>페이스북</li>
                <li>트위터</li>
                <li>유튜브</li>
                <li>블로그</li>
                <li>인스타그램</li>
              </ul>
            </div>
          </div>
          <div className="footer__recurit">
            <div className="footer-title">RECRUIT</div>
            <div className="footer-list">
              <ul>
                <li>채용 소개</li>
                <li>채용 지원하기</li>
              </ul>
            </div>
          </div>
          <div className="footer__webucks">
            <div className="footer-title">WEBUCKS</div>
            <div className="footer-list"></div>
          </div>
        </div>
    )
}

export default BottomNav;