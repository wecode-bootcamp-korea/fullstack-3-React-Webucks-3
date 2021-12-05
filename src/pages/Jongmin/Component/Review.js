import React, { useState } from "react";
import "../Detail/Detail.scss";

function Review() {
  // 리뷰 댓글 기능 구현

  // sessionStorage에서 ID 받아오기
  const idAll = sessionStorage.getItem("ID");
  const idFront = idAll.split("@")[0];

  // 화면에 보여줄 리뷰 상태 정의
  const [reviewComment, setReviewComment] = useState("");

  // 리뷰를 입력하면 그 값을 setReviewComment에 저장
  const handleReviewComment = (e) => {
    setReviewComment(e.target.value);
  };

  // enter 키 입력시 리뷰 하단에 새로운 div 생성
  const enterReview = (e) => {
    if (e.key === "Enter") {
      // div 생성 및 노드 연결
      let reviewDetail = document.getElementById("reviewDetail");

      let reviewDetailPartDiv = document.createElement("div");
      reviewDetail.appendChild(reviewDetailPartDiv);

      let reviewIDDiv = document.createElement("div");
      reviewDetailPartDiv.appendChild(reviewIDDiv);

      let reviewCommentDiv = document.createElement("div");
      reviewDetailPartDiv.appendChild(reviewCommentDiv);

      // class 생성
      let reviewDetailPartClass = document.createAttribute("class");
      reviewDetailPartClass.value = "reviewDetailPart";
      reviewDetailPartDiv.setAttributeNode(reviewDetailPartClass);

      let reviewIDClass = document.createAttribute("class");
      reviewIDClass.value = "reviewID";
      reviewIDDiv.setAttributeNode(reviewIDClass);

      let reviewCommentClass = document.createAttribute("class");
      reviewCommentClass.value = "reviewComment";
      reviewCommentDiv.setAttributeNode(reviewCommentClass);

      reviewIDDiv.innerText = idFront;
      reviewCommentDiv.innerText = reviewComment;
    }
  };

  return (
    <div>
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
              진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는
              전설이다. 진짜 화이트 초...
            </div>
          </div>
        </div>
        <input
          id="reviewMessage"
          type="text"
          placeholder="리뷰를 입력해주세요."
          onKeyPress={enterReview}
          onChange={handleReviewComment}
          value={reviewComment}
        />
      </div>
    </div>
  );
}

export default Review;
