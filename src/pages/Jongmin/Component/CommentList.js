import React from "react";
import "./Review.scss";

function Comment({ comment, onRemove }) {
  // sessionStorage에서 ID 받아오기
  const idAll = sessionStorage.getItem("ID");
  const idFront = idAll.split("@")[0];

  return (
    <>
      <div className="reviewDetailPart">
        <div className="reviewID">{idFront}</div>
        <div className="reviewCommentWithDel">
          <div className="reviewComment">{comment.comment}</div>
          <button onClick={() => onRemove(comment.id)}>DEL</button>
        </div>
      </div>
    </>
  );
}

function CommentList({ comments, onRemove }) {
  return (
    <div>
      {comments.map((data) => (
        <Comment comment={data} key={data.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CommentList;
